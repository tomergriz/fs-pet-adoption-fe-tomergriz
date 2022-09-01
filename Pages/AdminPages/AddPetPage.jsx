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
    Select,
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
    const [petInfo, setPetInfo] = useState({});
    const [errorMassage, setErrorMassage] = useState("");

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPetInfo({ ...petInfo, [name]: value });
    };

    const handleSignUp = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8080/pets/pet",
                petInfo
            );
            if (res.data) {
                console.log("res.data", res.data);
                setErrorMassage("");
            }
        } catch (err) {
            console.log(err);
            setErrorMassage(err.response.data || "Internal Server Error");
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

                            <FormControl id="name" isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl id="height">
                                <FormLabel>Height</FormLabel>
                                <Input
                                    type="number"
                                    name="height"
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl id="weight">
                                <FormLabel>Weight</FormLabel>
                                <Input
                                    type="text"
                                    name="weight"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl id="color">
                                <FormLabel>Color</FormLabel>
                                <Input
                                    type="text"
                                    name="color"
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl id="breed">
                                <FormLabel>Breed</FormLabel>
                                <Input
                                    type="text"
                                    name="breed"
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl id="hypoallergnic">
                                <FormLabel>Hypoallergnic</FormLabel>
                                <Select
                                    name="hypoallergnic"
                                    onChange={handleChange}
                                >
                                    <option>false</option>
                                    <option>true</option>
                                </Select>
                            </FormControl>

                            <FormControl id="adoptionStatus">
                                <FormLabel>Adoption Status</FormLabel>
                                <Select
                                    name="adoptionStatus"
                                    onChange={handleChange}
                                >
                                    <option>Available</option>
                                    <option>Adopted</option>
                                    <option>Fostered</option>
                                </Select>
                            </FormControl>
                        </HStack>
                        <FormControl id="bio">
                            <FormLabel>Bio</FormLabel>
                            <Input
                                type="email"
                                name="bio"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl id="picture">
                            <FormLabel>Picture</FormLabel>
                            <Input
                                type="text"
                                name="picture"
                                onChange={handleChange}
                            />
                        </FormControl>
                        <Stack spacing={1} pt={2}>
                            <Text color={"red"}>{errorMassage}</Text>
                            <Button
                                loadingText="Submitting"
                                disabled={
                                    petInfo.type === undefined ||
                                    petInfo.name === undefined
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
