import { useEffect, useState } from "react";
import { Container, Stack, Flex, Box, Heading, Text, Button, Image, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function CallToActionWithVideo() {
    const { currentUser } = useUserContext();
    const dogBackground = "https://res.cloudinary.com/dslnuaqdh/image/upload/v1683058834/Emotional-Industry_ladyti.jpg"
    const blackCatBackground = "https://res.cloudinary.com/dslnuaqdh/image/upload/v1683058835/black-cat-green-eyes-black-remove-background_pdet0g.png";

    return (
        <Container maxWidth="100vw" minHeight="calc(100vh - 64px)" pt="32px" pb="64px">
            <Stack
                direction={{ base: "column", md: "row" }}
                spacing={{ base: 10, md: 12 }}
                alignItems="flex-start"
                justifyContent="center"
            >   
            <Flex
                    direction="column"
                    alignItems={{ base: "center", md: "flex-start" }}
                    justifyContent="center"
                    flex="1"
                    textAlign={{ base: "center", md: "left" }}
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                        fontWeight="bold"
                        lineHeight="1.2"
                        mb={{ base: 4, md: 8 }}
                        color={useColorModeValue("gray.900", "white")}
                    >
                        Hello{" "}
                        {currentUser?.firstName ? (
                            <>
                                {currentUser.firstName} {currentUser.lastName},
                            </>
                        ) : (
                            "there,"
                        )}
                        <br />
                        Adopt a Pet.
                    </Heading>
                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        color={useColorModeValue("gray.600", "gray.400")}
                        mb={{ base: 8, md: 12 }}
                        maxW={{ base: "100%", md: "90%", lg: "80%" }}
                        lineHeight="tall"
                        textAlign={{ base: "center", md: "left" }}
                    >
                        The number of euthanized animals could be reduced dramatically if more people adopt pets instead
                        of buying them. When you adopt dogs and cats, you save a loving animal by making them part of
                        your family and open up shelter space for another animal who might desperately need it.
                    </Text>
                    <Button
                        as={NavLink}
                        to="/search"
                        variant="solid"
                        size="lg"
                        bg={"red.400"}
                        color={"white"}
                        colorScheme="red"
                        _hover={{ bg: "red.500", color: "white" }}
                    >
                        Get Started
                    </Button>
                </Flex>
                 <Box
                    flex="1"
                    position="relative"
                    overflow="hidden"
                    rounded="2xl"
                    boxShadow={useColorModeValue("2xl", "none")}
                    zIndex="1"
                    mt={{ base: 8, md: 0 }}
                    ml={{ base: 0, md: 12 }}
                >
                    <Image
                        src={useColorModeValue(dogBackground, blackCatBackground)}
                        alt="Hero Image"
                        objectFit="cover"
                        objectPosition="center"
                        w="100%"
                        h="100%"
                    />
                </Box>
            </Stack>
        </Container>
    );
}
