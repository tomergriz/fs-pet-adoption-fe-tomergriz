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
import React from "react";
import PetGrid from "./PetGrid";
import PetCard from "./PetCard";
import { products } from "./_data";

export default function Cards() {
    return (
            <Container maxWidth={"100vw"} mb={"13px"}>
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
                                color={"red.400"}
                                _after={{
                                    content: "''",
                                    width: "full",
                                    height: "30%",
                                    position: "absolute",
                                    bottom: 1,
                                    left: 0,
                                    zIndex: -1,

                                }}
                            >
                               
                            </Text>
                            <br />
                            <Text as={"span"} color={"red.400"}>
                                use everywhere!
                            </Text>
                        </Heading>
                    </Stack>
                </Stack>
                <PetGrid>
                    {products.map((product) => (
                        <PetCard key={product.id} product={product} />
                    ))}
                </PetGrid>

            </Container>
    );
}
