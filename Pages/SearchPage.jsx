import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Heading,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import PetGrid from "../components/GridWithAddToCartButton/PetGrid";
import PetCard from "../components/GridWithAddToCartButton/PetCard";
import PetSearch from "../components/PetSearch";

const SERVER_URL = "http://localhost:8080";

export default function Cards() {
  const [searchInfo, setSearchInfo] = useState({
    search: "",
    type: ["Dog", "Cat"],
  });
  const [pets, setPets] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setSearchInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const loadPets = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/pets/all`);
      setPets(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadPets();
  }, []);

  const filterPets = ({ name, type }) => {
    const searchField = searchInfo.search.toLowerCase();
    const petType = searchInfo.type;

    return (
      name.toLowerCase().includes(searchField) && petType.includes(type)
    );
  };

  return (
    <Container maxWidth="100vw" minHeight="80.4vh" mb="13px">
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        mt={{ base: 10, md: 10 }}
        direction={{ base: "column", md: "row" }}
      >
        <PetSearch searchInfo={searchInfo} handleChange={handleChange} />
      </Stack>
      <PetGrid>
        {pets
          .filter(filterPets)
          .map((pet) => <PetCard key={pet._id} pet={pet} />)}
      </PetGrid>
    </Container>
  );
}
