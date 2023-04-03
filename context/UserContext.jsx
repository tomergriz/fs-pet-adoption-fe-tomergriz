import { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";
export const UserContext = createContext("");
export const useUserContext = () => {
    return useContext(UserContext);
};

export default function UserContextProvider(props) {
    // const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const SERVER_URL = "http://localhost:8080";
    const [users, setUsers] = useState({});
    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem("token");
        return storedToken ? storedToken : null;
    });

    const [currentUser, setCurrentUser] = useState(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        return user ? user : {};
    });
    const isLoggedIn = currentUser !== null;

    useEffect(() => {
        loadUsers();
    }, [token]);

    const loadUsers = async () => {
        console.log(
            "WORKING BUT MOVE TO ADMIN PAGE. Here will be the basic check auth"
        );
        try {
            const res = await axios.get(`${SERVER_URL}/users/all`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsers(res?.data);
        } catch (err) {
            logout();
            console.log(err);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setCurrentUser({});
        setToken(null);
        setUsers({});
    };

    const updateUser = (newUser, id) => {
        setUsers((prevUsers) => {
            const index = prevUsers.findIndex((user) => user._id === id);
            prevUsers[index] = newUser;
            return prevUsers;
        });
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <UserContext.Provider
            value={{
                SERVER_URL,
                currentUser,
                setCurrentUser,
                users,
                setUsers,
                isLoggedIn,
                loadUsers,
                updateUser,
                token,
                setToken,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
