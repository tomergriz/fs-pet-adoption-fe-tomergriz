if (typeof process === "undefined") {
    var process = {
        env: {
            NODE_ENV: "development",
        },
    };
}

import { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const UserContext = createContext("");
export const useUserContext = () => {
    return useContext(UserContext);
};

export default function UserContextProvider(props) {
    const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL || "http://localhost:8080";
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem("token");
        return storedToken ? storedToken : null;
    });

    const [currentUser, setCurrentUser] = useState(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        return user ? user : {};
    });

    const isLoggedIn = currentUser !== null;

    const logout = async () => {
        try {
            await axios.post(
                `${SERVER_URL}/users/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.error(error);
        }

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setCurrentUser({});
        setToken(null);
    };

    const updateUser = (newUser, id) => {
        try {
            setUsers((prevUsers) => {
                const index = prevUsers.findIndex((user) => user._id === id);
                prevUsers[index] = newUser;
                return prevUsers;
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const storedToken = localStorage.getItem("token");

        if (storedToken) {
            const decodedToken = jwtDecode(storedToken);
            const isTokenExpired = decodedToken.exp * 1000 < Date.now();
            if (isTokenExpired) {
                logout();
            } else {
                setCurrentUser(user ? user : {});
                setToken(storedToken);
            }
        } else {
            setCurrentUser({});
            setToken(null);
        }
    }, []);

    useEffect(() => {
        if (token === null) {
            logout();
        }
    }, [token]);

    return (
        <UserContext.Provider
            value={{
                SERVER_URL,
                currentUser,
                setCurrentUser,
                isLoggedIn,
                updateUser,
                token,
                setToken,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
