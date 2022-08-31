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
import { useUserContext } from "../context/UserContext"


export default function Page404({ onClose, toggle }) {
    const { currentUser } = useUserContext();


    return (
        <>
            <Box minHeight={"80.4vh"} mb={"13px"}>
                <Stack
                    align={"center"}
                    spacing={{ base: 8, md: 10 }}
                    mt={{ base: 10, md: 10 }}
                    mx={{ base: 10, md: 10 }}
                >
                    <Stack mb={5} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                        >
                            <Text as={"span"}  color={"red.400"}>
                            Unauthorised Page
                            </Text><br/>
                            <Text as={"span"} position={"relative"}>
                            Hi{currentUser.firstName ? " ": ""}{currentUser.firstName}, you are unauthorized to view this page.
                        </Text>
                        </Heading>
                    </Stack>
                </Stack>

      
            </Box>
        </>
    );
}
