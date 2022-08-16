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

export default function LogInForm({ onClose, toggle }) {
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
            <Stack spacing={10}>
                <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                        bg: "blue.500",
                    }}
                    onClick={() => {
                        handleSubmit();
                        onClose();
                    }}
                >
                    Login
                </Button>

                <Text align={"center"} color={"blue.400"} onClick={toggle} 
                   _hover={{color: "blue.500",}}
                   _focus={{ boxShadow: "outline" }}
             
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
