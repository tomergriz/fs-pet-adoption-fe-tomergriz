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
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpForm({ onClose, toggle }) {
    const [showPassword, setShowPassword] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [errorMassage , setErrorMassage] = useState(null)

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSignUp = async () => {
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
            setErrorMassage(err.response.data.message !== undefined ? err.response.data.message : err.response.data)
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
                    />
                </FormControl>
                <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                        type="text"
                        name="lastName"
                        onChange={handleChange}
                    />
                </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handleChange}
                />
            </FormControl>
            <InputGroup>
                <InputRightElement h={"full"}>
                    <Button
                        pos={"absolute"}
                        top={"-43"}
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
                    type={showPassword ? "text" : "password"}
                    name="rePassword"
                    id="rePassword"
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl id="phone">
                <FormLabel>Phone Number</FormLabel>
                <Input type="number" name="phone" onChange={handleChange} />
            </FormControl>
            <Stack spacing={1} pt={2}>
                <Text color={"red"}>{errorMassage}</Text>
                <Button
                    loadingText="Submitting"
                    disabled={
                        userInfo.firstName === undefined ||
                        userInfo.email === undefined ||
                        userInfo.password == undefined ||
                        userInfo.rePassword == undefined
                    }
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    colorScheme={"red"}
                    bg={"red.400"}
                    _hover={{ bg: "red.500" }}
                    onClick={() => {
                        handleSignUp();
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
