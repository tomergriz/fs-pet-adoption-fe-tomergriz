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
    // IconProps,
    useColorModeValue,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

export default function CallToActionWithVideo() {
    return (
        <Container maxWidth={"100vw"} minHeight={"88vh"} mb={"13px"}>
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                pt={{ base: 20, md: 20 }}
                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text
                            as={"span"}
                            position={"relative"}
                       
                        >
                            Adopt A Pet.
                        </Text>
                        <br />
                        <Text as={"span"} color={"red.400"}>
                            Because you'll save a life.
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
                            as={NavLink}
                            to="/search"
                            title="search"
                            rounded={"full"}
                            size={"lg"}
                            fontWeight={"normal"}
                            px={8}
                            colorScheme={"red"}
                            bg={"red.400"}
                            _hover={{ bg: "red.500" }}
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
                            src={
                                "https://www.k9franchise.com/wp-content/uploads/2020/03/Emotional-Industry.jpg"
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}
