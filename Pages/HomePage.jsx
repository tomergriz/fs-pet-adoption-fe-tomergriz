import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    useColorModeValue,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext"

export default function CallToActionWithVideo() {
    const { currentUser } = useUserContext();

    return (
        <Container maxWidth={"100vw"} minHeight={"80.4vh"} mb={"13px"}>
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                mt={{ base: 10, md: 10 }}

                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text as={"span"} position={"relative"}>
                            Hello {currentUser.firstName} {currentUser.lastName} <br />Adopt A Pet.
                        </Text>
                        <br />
                        <Text as={"span"} color={"red.400"}>
                            You'll save a life.
                        </Text>
                    </Heading>
                    <Text color={"gray.500"}>
                        The number of euthanized animals could be reduced
                        dramatically if more people adopt pets instead of buying
                        them.
                        <p /> When you adopt dogs and cats, you save a loving
                        animal by making them part of your family and open up
                        shelter space for another animal who might desperately
                        need it.
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: "column", sm: "row" }}
                    >
                        <Button
                            fontSize={"sm"}
                            fontWeight={600}
                            as={NavLink}
                            to="/search"
                            title="search"
                            rounded={"full"}
                            size={"lg"}
                            px={8}
                            colorScheme={"red"}
                            bg={"red.400"}
                            _hover={{ bg: "red.500", color: "white" }}
                        >
                            Get started
                        </Button>
                    </Stack>
                </Stack>
                <Flex
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    position={"relative"}
                    w={"full"}
                >
                    <Box
                        position={"relative"}
                        height={"300px"}
                        rounded={"2xl"}
                        boxShadow={"2xl"}
                        width={"full"}
                        overflow={"hidden"}
                    >
                        <Image
                            alt={"Hero Image"}
                            fit={"cover"}
                            align={"center"}
                            w={"100%"}
                            h={"100%"}
                            src={useColorModeValue(
                                "https://www.k9franchise.com/wp-content/uploads/2020/03/Emotional-Industry.jpg",
                                "https://c4.wallpaperflare.com/wallpaper/755/310/505/black-cat-green-eyes-black-background-black-short-fur-cat-wallpaper-preview.jpg"
                            )}
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}
