import { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";
export const UserContext = createContext("");
export const useUserContext = () => {
    return useContext(UserContext);
};

export default function UserContextProvider(props) {
    // const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const SERVER_URL = "http://localhost:8080";

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <UserContext.Provider
            value={{ SERVER_URL, currentUser, setCurrentUser }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
