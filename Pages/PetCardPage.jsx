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
import React, { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../context/UserContext";

export default function PetCardPage() {
    const { currentUser, SERVER_URL } = useUserContext();
    const [pet, setPet] = useState();
    const { id } = useParams();
    // console.log("currentUser", currentUser);

    const url = `${SERVER_URL}/pets/${id}`;
    const loadPets = async () => {
        try {
            const res = await axios.get(url);
            console.log(res.data[0].name);
            setPet(res.data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadPets();
    }, []);

    return (
        <>
            <Box minHeight={"80.4vh"} mb={"13px"}>
                <Stack
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
                            <Text as={"span"} color={"red.400"}>
                                {pet?.name}
                            </Text>
                            <br />
                            <Text as={"span"} position={"relative"}>
                                {currentUser.firstName
                                    ? `${currentUser.firstName} this `
                                    : `This`}{" "}
                                page is not exist.
                            </Text>
                        </Heading>
                    </Stack>
                </Stack>
                <Box>Hello</Box>
            </Box>
        </>
    );
}
