import {
    Box,
    Flex,
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
    Link,
    HStack,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Tooltip,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";

export default function SignUpForm({ onClose, toggle }) {
    const [showPassword, setShowPassword] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [errorMassage, setErrorMassage] = useState(null);
    const { SERVER_URL, currentUser } = useUserContext();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value });
    };
    const handleClick = async (e) => {
        if (currentUser?.token) {
                                                                /* update existing user  */
            console.log("currentUser", currentUser);
            console.log("userInfo", userInfo);
            try {
                console.log(currentUser);
                const url = `${SERVER_URL}/users/${currentUser.id}`;
                const res = await axios.put(url, {
                    userInfo,
                });
                console.log("res", res);
            } catch (err) {
                console.log(err);
            }
        } else {
            /*SignUp newUser */
            console.log("newUser");
            try {
                const res = await axios.post(
                    "http://localhost:8080/users/signup",
                    userInfo
                );
                if (res.data) {
                    console.log("res.data", res.data);
                    onClose();
                }
            } catch (err) {
                console.log(err);
                setErrorMassage(
                    err.response.data.message !== undefined
                        ? err.response.data.message
                        : err.response.data
                );
            }
        }
    };

    return (
        <>
            <HStack>
                <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        defaultValue={currentUser.firstName}
                    />
                </FormControl>
                <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                        defaultValue={currentUser.lastName}
                    />
                </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    defaultValue={currentUser.email}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handleChange}
                    defaultValue={currentUser.phone}
                />
            </FormControl>
            <InputGroup>
                <InputRightElement h={"full"}>
                    <Button
                        pos={"absolute"}
                        top={"-41"}
                        variant={"ghost"}
                        onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                        }
                    >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <FormControl id="rePassword" isRequired>
                <FormLabel>Re Password</FormLabel>
                <Input
                    type="password"
                    name="rePassword"
                    id="rePassword"
                    onChange={handleChange}
                    defaultValue={currentUser.phone}
                />
            </FormControl>
            <FormControl id="phone">
                <FormLabel>Phone Number</FormLabel>
                <Input
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    defaultValue={currentUser.phone}
                />
            </FormControl>
            <Stack spacing={1} pt={2}>
                <Text color={"red"}>{errorMassage}</Text>
                <Button
                    loadingText="Submitting"
                    disabled={
                        !currentUser?.token &&
                        (userInfo.firstName === undefined ||
                            userInfo.email === undefined ||
                            userInfo.password == undefined ||
                            userInfo.rePassword == undefined)
                    }
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    colorScheme={"red"}
                    bg={"red.400"}
                    _hover={{ bg: "red.500" }}
                    onClick={() => {
                        handleClick();
                    }}
                >
                    Sign up
                </Button>
                <Stack>
                    <Text
                        align={"center"}
                        color={"red.400"}
                        onClick={toggle}
                        as={"u"}
                        cursor={"pointer"}
                        transition={"all .3s ease"}
                        _hover={{ color: "red.500" }}
                    >
                        Already a user? Login
                    </Text>
                </Stack>
            </Stack>
        </>
    );
}
