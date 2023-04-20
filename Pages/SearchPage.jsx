import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Checkbox, CheckboxGroup, Container, Heading, IconButton, Input, Stack, Text, Spinner } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import PetGrid from "../components/PetComponents/PetGrid";
import PetCard from "../components/PetComponents/PetCard";
import PetSearch from "../components/PetSearch";
import { useUserContext } from "../context/UserContext";

export default function Cards() {
    const [searchInfo, setSearchInfo] = useState({
        search: "",
        type: ["Dog", "Cat"],
    });
    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { SERVER_URL } = useUserContext();

    const handleChange = ({ target: { name, value } }) => {
        setSearchInfo((prevState) => ({ ...prevState, [name]: value }));
    };

    const loadPets = async () => {
        try {
            const { data } = await axios.get(`${SERVER_URL}/pets/all`);
            setPets(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setError(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPets();
    }, []);

    const filterPets = ({ name, type }) => {
        const searchField = searchInfo.search.toLowerCase();
        const petType = searchInfo.type;

        return name?.toLowerCase().includes(searchField) && petType.includes(type);
    };

    return (
        <Container maxWidth="100vw" minHeight="80.4vh" mb="13px">
            <Stack align="center" spacing={{ base: 8, md: 10 }} mt={{ base: 10, md: 10 }} direction={{ base: "column", md: "row" }}>
                <PetSearch searchInfo={searchInfo} handleChange={handleChange} />
            </Stack>
            {isLoading ? (
                <Box display="flex" justifyContent="center" alignItems="center" h="300px">
                    <Spinner size="xl" />
                </Box>
            ) : error ? (
                <Box display="flex" justifyContent="center" alignItems="center" h="300px">
                    <Text fontSize="xl" fontWeight="bold" color="red.500">
                        {error}
                    </Text>
                </Box>
            ) : (
                <PetGrid>
                    {pets.filter(filterPets).map((pet) => (
                        <PetCard key={pet._id} pet={pet} />
                    ))}
                </PetGrid>
            )}
        </Container>
    );
}
