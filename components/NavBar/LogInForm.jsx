import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";

export default function LogInForm({ onClose, toggle }) {
    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const { SERVER_URL, setCurrentUser, setToken } = useUserContext();
    const url = `${SERVER_URL}/users/login`;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleEnterKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };

    const handleLogin = async () => {
        if (!userInfo.email || !userInfo.password) {
            setErrorMessage("Please fill in all fields.");
            return;
        }
        try {
            const res = await axios.post(url, {
                email: userInfo.email,
                password: userInfo.password,
            });
            setCurrentUser(res.data);
            setToken(res.data.token);
            setErrorMessage("");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data));
            onClose();
        } catch (err) {
            setErrorMessage(err.response?.data || "Network Error");
        }
    };

    return (
        <>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={handleChange} onKeyDown={handleEnterKeyPress} />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" onChange={handleChange} onKeyDown={handleEnterKeyPress} />
            </FormControl>
            <Text color="red">{errorMessage}</Text>
            <Stack spacing={1}>
                <Button
                    disabled={!userInfo.email || !userInfo.password}
                    loadingText="Submitting"
                    fontSize="sm"
                    fontWeight={600}
                    colorScheme="red"
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Text align="center" color="red.400" onClick={toggle} as="u" cursor="pointer" transition="all .3s ease" _hover={{ color: "red.500" }}>
                    Don't have an account? Sign up
                </Text>
            </Stack>
        </>
    );
}
