import {
    Box,
    Flex,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormControl,
    Input,
    Checkbox,
    Stack,
    Link,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import axios from "axios";

export default function LogInForm({ onClose, toggle }) {
    const [usersList, setUsersList] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    let navigate = useNavigate();

    const { SERVER_URL, currentUser, setCurrentUser } = useUserContext();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value });
    };
    const handleLogin = async () => {
        try {
            const res = await axios.post(`${SERVER_URL}/users/login`, {
                email: userInfo.email,
                password: userInfo.password,
            });
            setCurrentUser(res.data);
            setErrorMessage("");
            localStorage.setItem("user", JSON.stringify(res.data));
            onClose();
            console.log("res.data", res.data);
        } catch (err) {
            setErrorMessage(err.response.data || "Network Error");
        }
    };

    return (
        <>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
            </FormControl>
            <Text color={"red"}>{errorMessage}</Text>
            <Stack spacing={1}>
                <Button
                    disabled={
                        userInfo.email === undefined ||
                        userInfo.password === undefined
                    }
                    loadingText="Submitting"
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    colorScheme={"red"}
                    bg={"red.400"}
                    _hover={{ bg: "red.500" }}
                    onClick={() => {
                        handleLogin();
                        // onClose();
                    }}
                >
                    Login
                </Button>
                <Text
                    align={"center"}
                    color={"red.400"}
                    onClick={toggle}
                    as={"u"}
                    cursor={"pointer"}
                    transition={"all .3s ease"}
                    _hover={{ color: "red.500" }}
                >
                    Don't have an account? Sign up
                </Text>

                {/* <Link color={"blue.400"}>
                    Don't have an account yet? Sign Up
                </Link> */}
            </Stack>
        </>
    );
}
