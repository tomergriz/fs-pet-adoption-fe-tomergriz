import { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

export const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);

export default function UserContextProvider({ children }) {
    const SERVER_URL = import.meta.env.VITE_REACT_APP_SERVER_URL || "http://localhost:8080";
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [currentUser, setCurrentUser] = useState(() => JSON.parse(localStorage.getItem("user")) || {});
    const [isTokenExpired, setIsTokenExpired] = useState(false);

    const isLoggedIn = !!token;

    const logout = async () => {
        try {
            await axios.get(
                `${SERVER_URL}/users/logout`,
                {
                  headers: { Authorization: `Bearer ${token}` },
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
            setCurrentUser((prevUser) => {
                return prevUser._id === id ? newUser : prevUser;
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));

        if (storedToken) {
            const decodedToken = jwtDecode(storedToken);
            const isTokenExpired = decodedToken.exp * 1000 < Date.now();

            if (isTokenExpired) {
                setIsTokenExpired(true);
                logout();
            } else {
                setCurrentUser(user || {});
                setToken(storedToken);

                const interval = setInterval(() => {
                    const decodedToken = jwtDecode(token);
                    if (decodedToken.exp * 1000 < Date.now()) {
                        clearInterval(interval);
                        setIsTokenExpired(true);
                        logout();
                    }
                }, 5000);
            }
        } else {
            setCurrentUser({});
            setToken(null);
        }
    }, [token]);

    return (
        <UserContext.Provider value={{ SERVER_URL, currentUser, setCurrentUser, isLoggedIn, updateUser, token, setToken }}>
            {children}
            {isTokenExpired && (
                <Modal isOpen={isTokenExpired} onClose={() => setIsTokenExpired(false)}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Token Expired</ModalHeader>
                        <ModalBody>Your session has expired. Please log in again to continue using the application.</ModalBody>
                        <ModalFooter>
                            <Button
                                fontSize={"sm"}
                                fontWeight={600}
                                color={"white"}
                                bg={"red.400"}
                                border={"none"}
                                transition={"all .3s ease"}
                                _hover={{ bg: "red.500" }}
                                mr={3}
                                onClick={() => setIsTokenExpired(false)}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </UserContext.Provider>
    );
}
