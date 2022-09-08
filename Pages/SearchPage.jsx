import {
    Container,
    Heading,
    Text,
    Input,
    Button,
    IconButton,
    Checkbox,
    CheckboxGroup,
    Stack,
    HStack,
    Flex,
    Box,
    VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PetGrid from "../components/GridWithAddToCartButton/PetGrid";
import PetCard from "../components/GridWithAddToCartButton/PetCard";
import { usePetContext } from "../context/PetContext";
import { SearchIcon } from "@chakra-ui/icons";

export default function Cards() {
    const { pets } = usePetContext();
    const [searchInfo, setSearchInfo] = useState({});

    function handleChange({ target }) {
        const { name, value } = target;
        setSearchInfo({ ...searchInfo, [name]: value });
        console.log(searchInfo);
    }

    function filter(pets) {
        const searchField = searchInfo?.search;

        // console.log("pet.name", pets);
        if (Object.values(pets).includes(searchField)) return pets;
    }

    return (
        <Container maxWidth={"100vw"} minHeight={"80.4vh"} mb={"13px"}>
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                mt={{ base: 10, md: 10 }}
                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} mb={5} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text as={"span"} color={"red.400"}>
                            Search for Pet
                        </Text>
                    </Heading>
                    <Container>
                        <Box
                            component="form"
                            sx={{
                                p: "2px 4px",
                                display: "flex",
                                alignItems: "center",
                                height: "fit-content",
                            }}
                        >
                            <Input
                                name="search"
                                type="search"
                                placeholder="Search"
                                onChange={handleChange}
                                sx={{ ml: 1, flex: 1 }}
                                inputProps={{ "aria-label": "search" }}
                            ></Input>
                            <Button disabled>Clear</Button>
                            <IconButton
                                type="submit"
                                sx={{ p: "10px" }}
                                aria-label="search"
                                icon={<SearchIcon />}
                            ></IconButton>{" "}
                        </Box>
                        <CheckboxGroup
                            colorScheme="green"
                            defaultValue={["Dog", "Cat"]}
                            name="type"
                            type="checkbox"
                            onChange={handleChange}
                        >
                            <Stack
                                spacing={[1, 5]}
                                direction={["column", "row"]}
                                align={"center"}
                            >
                                <Checkbox value="Dog">Dog</Checkbox>
                                <Checkbox value="Cat">Cat</Checkbox>
                            </Stack>
                        </CheckboxGroup>
                    </Container>
                </Stack>
            </Stack>
            <PetGrid>
                {pets?.filter(filter).map((pet) => (
                    <PetCard key={pet._id} pet={pet} />
                ))}
            </PetGrid>
        </Container>
    );
}
