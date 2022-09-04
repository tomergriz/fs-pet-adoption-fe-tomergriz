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
    VStack,
    Icon,
    Skeleton,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../context/UserContext";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function PetCardPage() {
    const { currentUser, SERVER_URL } = useUserContext();
    const [pet, setPet] = useState();
    const { id } = useParams();
    // console.log("currentUser", currentUser);

    const url = `${SERVER_URL}/pets/${id}`;
    const loadPets = async () => {
        try {
            const res = await axios.get(url);
            console.log(res.data[0]);
            setPet(res.data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadPets();
    }, []);

    return (
        <Box
            maxW="7xl"
            mx="auto"
            px={{
                base: "0",
                lg: "12",
            }}
            py={{
                base: "0",
                lg: "12",
            }}
        >
            <Stack
                direction={{
                    base: "column-reverse",
                    lg: "row",
                }}
                spacing={{
                    base: "0",
                    lg: "20",
                }}
            >
                <Box
                    width={{
                        lg: "sm",
                    }}
                    transform={{
                        base: "translateY(-20%)",
                        lg: "none",
                    }}
                    bg={{
                        base: useColorModeValue("red.50", "gray.700"),
                        lg: "transparent",
                    }}
                    mx={{
                        base: "6",
                        md: "8",
                        lg: "0",
                    }}
                    px={{
                        base: "6",
                        md: "8",
                        lg: "0",
                    }}
                    py={{
                        base: "6",
                        md: "8",
                        lg: "12",
                    }}
                >
                    <Stack
                        spacing={{
                            base: "8",
                            lg: "10",
                        }}
                    >
                        <Stack
                            spacing={{
                                base: "2",
                                lg: "4",
                            }}
                        >
                            <Heading
                                size="xl"
                                color={useColorModeValue("red.500", "red.300")}
                            >
                                {pet?.name}
                            </Heading>
                            <Heading size="xl" fontWeight="normal">
                                {pet?.breed}
                            </Heading>
                            <Heading size="lg" fontWeight="normal">
                                <Box>
                                    {pet?.color} <br />
                                    {pet?.height}" / {pet?.weight} pounds <br />
                                    {pet?.hypoallergnic
                                        ? "Hypoallergnic"
                                        : "Non Hypoallergnic"}{" "}
                                    <br />
                                    Dietery:
                                    {pet?.dietery.length > 0
                                        ? pet.dietery
                                        : " No Restrictions"}
                                    <br />
                                    <br />
                                    <Text fontSize="lg">{pet?.bio}</Text>
                                    <Text fontWeight="bold">
                                        {" "}
                                        {pet?.adoptionStatus === "Adopted"
                                            ? "Already adopted"
                                            : ""}
                                        {pet?.adoptionStatus === "Fostered"
                                            ? "Already fostered"
                                            : ""}
                                    </Text>
                                </Box>
                            </Heading>
                        </Stack>
                        {pet?.adoptionStatus === "Available" &&
                        currentUser?.token ? (
                            <HStack spacing="3">
                                <Link
                                    color={useColorModeValue(
                                        "red.500",
                                        "red.300"
                                    )}
                                    fontWeight="bold"
                                    fontSize="lg"
                                >
                                    {" "}
                                    <Icon
                                        mr={"2"}
                                        color={useColorModeValue(
                                            "red.500",
                                            "red.300"
                                        )}
                                        as={FaArrowLeft}
                                    />
                                    Adopt
                                </Link>

                                <Link
                                    color={useColorModeValue(
                                        "red.500",
                                        "red.300"
                                    )}
                                    fontWeight="bold"
                                    fontSize="lg"
                                >
                                    Foster
                                    <Icon
                                        ml={"2"}
                                        color={useColorModeValue(
                                            "red.500",
                                            "red.300"
                                        )}
                                        as={FaArrowRight}
                                    />{" "}
                                </Link>
                            </HStack>
                        ) : (
                            <HStack spacing="3">
                                <Link
                                    color={useColorModeValue(
                                        "red.500",
                                        "red.300"
                                    )}
                                    fontWeight="bold"
                                    fontSize="lg"
                                >
                                    Register Now to Adopt
                                </Link>
                                <Icon
                                    color={useColorModeValue(
                                        "red.500",
                                        "red.300"
                                    )}
                                    as={FaArrowRight}
                                />
                            </HStack>
                        )}
                    </Stack>
                </Box>
                <Flex flex="1" overflow="hidden">
                    <Image
                        src={pet?.picture}
                        alt={pet?.name}
                        fallback={<Skeleton />}
                        maxH="450px"
                        minW="300px"
                        objectFit="cover"
                        flex="1"
                    />
                    {/* <Image
                                        display={{
                                            base: "none",
                                            sm: "initial",
                                        }}
                                        src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                                        alt="Lovely Image"
                                        fallback={<Skeleton />}
                                        maxH="450px"
                                        objectFit="cover"
                                    /> */}
                </Flex>
            </Stack>
        </Box>
    );
}
