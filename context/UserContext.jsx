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
    const [token, setToken] = useState({});
    const [currentUser, setCurrentUser] = useState(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) return user;
        return {};
    });
    const isLoggedIn = currentUser !== null;

    const updateUser = (newUser, id) => {
        setUsers((prevUsers) => {
            const index = prevUsers.findIndex((user) => user._id === id);
            prevUsers[index] = newUser;
            return prevUsers;
        });
    };

    const loadUsers = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}/users/all`);
            setUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

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
