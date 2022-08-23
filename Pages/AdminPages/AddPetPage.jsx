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
    Container,
    Stack,
    Checkbox,
    Link,
    HStack,
    InputGroup,
    InputRightElement,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddPetPage({ onClose, toggle }) {
    const [showPassword, setShowPassword] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value });
        console.log(userInfo.phone);
        console.log(validation.isNumber(userInfo.phone));
    };

    const handleSignUp = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8080/users/signup",
                userInfo
            );
            if (res.data) {
                console.log("res.data", res.data);
            }
        } catch (err) {
            console.log(err.response.data);
        }
    };
    return (
        <>
            <Container minHeight={"80.4vh"} mb={"13px"}>
                <Stack
                    align={"center"}
                    spacing={{ base: 8, md: 10 }}
                    mt={{ base: 10, md: 10 }}
                    direction={{ base: "column", md: "row" }}
                >
                    <Stack mb={5} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                        >
                            <Text as={"span"} color={"red.400"}>
                                Add Pet
                            </Text>
                        </Heading>
                    </Stack>
                </Stack>

                <Flex>
                    <FormControl>
                        <HStack>
                            <FormControl id="type" isRequired>
                                <FormLabel>Type</FormLabel>
                                <Input
                                    type="type"
                                    name="type"
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl id="name">
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                onChange={handleChange}
                            />
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
                                        setShowPassword(
                                            (showPassword) => !showPassword
                                        )
                                    }
                                >
                                    {showPassword ? (
                                        <ViewIcon />
                                    ) : (
                                        <ViewOffIcon />
                                    )}
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
                            <Input
                                type="phone"
                                name="phone"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <Stack spacing={1} pt={2}>
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
                                    onClose();
                                }}
                            >
                                Update Details
                            </Button>
                        </Stack>
                    </FormControl>
                </Flex>

                {/* </Flex> */}
            </Container>
        </>
    );
}
