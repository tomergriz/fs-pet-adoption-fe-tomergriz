import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext("");
export const useUserContext = () => {
    return useContext(UserContext);
};

export default function UserContextProvider(props) {
    const baseUrl = "http://localhost:8080/users";
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        try {
            const res = await axios.get(`${baseUrl}/all`);
            setUsers(res.data);
        } catch (err) {}
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <UserContext.Provider value={{ users }}>
            {props.children}
        </UserContext.Provider>
    );
}
