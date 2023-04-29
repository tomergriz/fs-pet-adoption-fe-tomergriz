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
    useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import { DropzoneArea } from "material-ui-dropzone";

export default function AddPetPage({ onClose, toggle }) {
    const { token, currentUser, SERVER_URL } = useUserContext();
    const [petInfo, setPetInfo] = useState({
        type: "",
        name: "",
        height: "",
        weight: "",
        color: "",
        breed: "",
        hypoallergnic: "",
        bio: "",
        picture: "",
    });
    const [errorMassage, setErrorMassage] = useState("");

    const toast = useToast();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPetInfo({ ...petInfo, [name]: value });
    };

    const handleSignUp = async () => {
        try {
            const formData = new FormData();
            formData.append("type", petInfo.type || "Dog");
            formData.append("name", petInfo.name);
            formData.append("height", petInfo.height);
            formData.append("weight", petInfo.weight);
            formData.append("color", petInfo.color);
            formData.append("breed", petInfo.breed);
            formData.append("hypoallergnic", petInfo.hypoallergnic || "false");
            formData.append("bio", petInfo.bio);
            formData.append("petImage", petInfo.picture);
    
            const res = await axios.post(`${SERVER_URL}/pets/add`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            if (res.data) {
                setErrorMassage("");
                toast({
                    title: "Pet was successfully Added !",
                    status: "success",
                    position: "top",
                    duration: 5000,
                    isClosable: true,
                });
                setPetInfo({
                    type: "",
                    name: "",
                    height: "",
                    weight: "",
                    color: "",
                    breed: "",
                    hypoallergnic: "",
                    bio: "",
                    picture: "",
                });
            }
        } catch (err) {
            setErrorMassage(err?.response?.data || "Internal Server Error");
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
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
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
                                <Select name="type" defaultValue="Dog" onChange={handleChange}>
                                    <option>Dog</option>
                                    <option>Cat</option>
                                </Select>
                            </FormControl>

                            <FormControl id="name" isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" name="name" onChange={handleChange} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl id="height">
                                <FormLabel>Height</FormLabel>
                                <Input type="number" name="height" onChange={handleChange} />
                            </FormControl>

                            <FormControl id="weight">
                                <FormLabel>Weight</FormLabel>
                                <Input type="text" name="weight" onChange={handleChange} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl id="color">
                                <FormLabel>Color</FormLabel>
                                <Input type="text" name="color" onChange={handleChange} />
                            </FormControl>

                            <FormControl id="breed">
                                <FormLabel>Breed</FormLabel>
                                <Input type="text" name="breed" onChange={handleChange} />
                            </FormControl>
                        </HStack>
                        <HStack>
                            <FormControl id="hypoallergnic">
                                <FormLabel>Hypoallergnic</FormLabel>
                                <Select name="hypoallergnic" defaultValue="Dog" onChange={handleChange}>
                                    <option>false</option>
                                    <option>true</option>
                                </Select>
                            </FormControl>
                        </HStack>
                        <FormControl id="bio">
                            <FormLabel>Bio</FormLabel>
                            <Input type="text" name="bio" onChange={handleChange} />
                        </FormControl>
                        <FormControl id="picture" isRequired>
                            <FormLabel>Picture</FormLabel>
                            <DropzoneArea
                                acceptedFiles={["image/*"]}
                                dropzoneText={"Drag and drop an image here or click to select"}
                                onChange={(files) => {
                                    setPetInfo({ ...petInfo, picture: files[0] });
                                }}
                            />
                        </FormControl>
                        <Stack spacing={1} pt={2}>
                            <Text color={"red"}>{errorMassage}</Text>
                            <Button
                                loadingText="Submitting"
                                isDisabled={petInfo.name === "" || petInfo.picture === undefined}
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
                                Add Pet
                            </Button>
                        </Stack>
                    </FormControl>
                </Flex>

                {/* </Flex> */}
            </Container>
        </>
    );
}
