import { Container, Stack, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useState,useEffect } from "react";
import PetGrid from "../components/GridWithAddToCartButton/PetGrid";
import PetCard from "../components/GridWithAddToCartButton/PetCard";
import { pets } from "../components/GridWithAddToCartButton/_data";
import { v4 as uuidv4 } from "uuid";
import axios from "axios"
import { useUserContext } from "../context/UserContext";
import { usePetContext } from "../context/PetContext";

export default function Cards() {
    const { SERVER_URL } = useUserContext();
    // const { pets, setPets, petErrMassage } = usePetContext();
    const [pets, setPets] = useState([]);

    const loadPets = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}/pets/all`);
            setPets(res.data);
            console.log(pets);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadPets();
    }, []);

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
                </Stack>
            </Stack>
            <PetGrid>
                {pets.map((product) => (
                    <PetCard key={uuidv4()} pet={product} />
                ))}
            </PetGrid>
        </Container>
    );
}
