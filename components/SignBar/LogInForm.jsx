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
import React, { useState } from "react";

export default function LogInForm({onClose, toggle}) {
    const [loginObject, setLoginObject] = useState({});

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setLoginObject({ ...loginObject, [name]: value });
    };

    const handleSubmit = () => {
        // onSubmit(loginObject);
        console.log("onSubmit:  ", loginObject);
    };

    return (
        <>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                />
            </FormControl>
            <Stack spacing={10}>
                <Stack
                    direction={{
                        base: "column",
                        sm: "row",
                    }}
                    align={"start"}
                    justify={"space-between"}
                ></Stack>
                <Button
                    bg={"blue.400"}
                    color={"white"}
                    onClick={() => {
                        handleSubmit();
                        onClose();
                    }}
                    _hover={{
                        bg: "blue.500",
                    }}
                >
                    Login
                </Button>

                <Text onClick={toggle} >Don't have an account? Sign up</Text>

                {/* <Link color={"blue.400"}>
                    Don't have an account yet? Sign Up
                </Link> */}
            </Stack>
        </>
    );
}
