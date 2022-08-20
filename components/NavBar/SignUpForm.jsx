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
                console.log(userInfo);
            }
        } catch (err) {
            console.log(err.response.data);
        }
    };

    return (
        <>
            <HStack>
                <Box>
                    <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Box>
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
                <InputGroup>
                    <InputRightElement h={"full"}>
                        <Button
                            mt={12}
                            variant={"ghost"}
                            onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                            }
                        >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                    <FormControl id="rePassword" isRequired>
                        <FormLabel pt={4}>Re Password</FormLabel>
                        <Input
                            type={showPassword ? "text" : "password"}
                            name="rePassword"
                            id="rePassword"
                            onChange={handleChange}
                        />
                    </FormControl>
                </InputGroup>
            </FormControl>
            <FormControl id="phone">
                <FormLabel>Phone Number</FormLabel>
                <Input type="phone" name="phone" onChange={handleChange} />
            </FormControl>
            <Stack spacing={0} pt={2}>
                <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                        bg: "blue.500",
                    }}
                    onClick={() => {
                        handleSignUp();
                        onClose();
                    }}
                >
                    Sign up
                </Button>
                <Stack pt={2}>
                    <Text align={"center"} color={"blue.400"} onClick={toggle}>
                        Already a user? Login
                    </Text>
                </Stack>
            </Stack>
        </>
    );
}
