import { useState } from "react";
import { Heading, Text, Input, Button, IconButton, Checkbox, CheckboxGroup, Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function PetSearch({ searchInfo: { search, type }, handleChange }) {
  return (
    <Stack flex={1} mb={10} spacing={{ base: 5, md: 10 }}>
      <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
        <Text as="span" color="red.400">
          Search for Pets
        </Text>
      </Heading>
      <Container maxW="container.lg">
        <Box
          as="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: "fit-content",
            justifyContent: "center",
            bg: "white",
            boxShadow: "lg",
            borderRadius: "lg",
            mb: 10,
          }}
        >
          <Input
            name="search"
            type="search"
            placeholder="Search for a pet..."
            onChange={handleChange}
            sx={{ ml: 1, flex: 1, fontSize: "lg", py: 4, borderRadius: "lg" }}
            aria-label="search"
          />
          <IconButton
            type="submit"
            icon={<SearchIcon />}
            bg="red.400"
            color="white"
            ml={2}
            aria-label="Search"
            _hover={{ bg: "red.500" }}
            _focus={{ outline: "none" }}
            onClick={(e) => e.preventDefault()}
          />
        </Box>
        <CheckboxGroup
          name="type"
          value={type}
          onChange={(value) => handleChange({ target: { name: "type", value } })}
          justifyContent="center"
          mb={10}
        >
          <Stack direction="row" spacing={8}>
            <Checkbox colorScheme="red" value="Dog" size="lg">
              Dog
            </Checkbox>
            <Checkbox colorScheme="red" value="Cat" size="lg">
              Cat
            </Checkbox>
          </Stack>
        </CheckboxGroup>
      </Container>
    </Stack>
  );
}
