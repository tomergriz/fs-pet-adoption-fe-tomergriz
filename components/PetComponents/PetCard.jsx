import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    Spacer,
    Flex,
} from "@chakra-ui/react";
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import FavoriteButton from "./FavoriteButton";
import axios from "axios";

export default function PetCard({ pet, rootProps }) {
    const { picture, name, _id } = pet;
    const { currentUser, setCurrentUser, SERVER_URL, token } = useUserContext();

    async function handleFavorite() {
        try {
            const url = `${SERVER_URL}/pets/${pet._id}/save`;
            const res = await axios.put(
                url,
                {},
                {
                    headers: {
                        authorization: "Bearer " + token,
                    },
                }
            );
            if (res) {
                setCurrentUser(res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Stack
            // as={NavLink}
            // to={`/search/pet/${_id}`}
            rounded={"2xl"}
            boxShadow={"2xl"}
            transition={"all .3s ease"}
            cursor={"pointer"}
            _hover={{ bg: useColorModeValue("pink.100", "pink.900") }}
            p={2}
            borderRadius={useBreakpointValue({
                base: "md",
                md: "xl",
            })}
            bg={useColorModeValue("gray.200", "gray.700")}
            spacing={useBreakpointValue({
                base: "4",
                md: "5",
            })}
            {...rootProps}
        >
            <Box position="relative">
                <AspectRatio ratio={4 / 3}>
                    <Image
                        src={picture}
                        alt={picture}
                        draggable="false"
                        fallback={<Skeleton />}
                        borderRadius={useBreakpointValue({
                            base: "md",
                            md: "xl",
                        })}
                    />
                </AspectRatio>
                <FavoriteButton
                    onClick={handleFavorite}
                    position="absolute"
                    top="4"
                    right="4"
                    // bgColor={(currentUser.saved).includes_id) ? "white" : "black"}
                    aria-label={`Add ${name} to your favorite`}
                />
            </Box>
            <Stack align={"center"}>
                <Text spacing="1" fontWeight="medium" color={useColorModeValue("gray.700", "gray.400")}>
                    {name}
                </Text>
            </Stack>
            <Flex justify={"center"}>
                <Stack direction={"row"} spacing={3} alignItems="center" align="center">
                    {pet?.adoptionStatus === "Available" ? (
                        <Button
                            as={NavLink}
                            to={`/search/pet/${_id}`}
                            fontSize={"sm"}
                            fontWeight={600}
                            color={"white"}
                            colorScheme={"red"}
                            bg={"green.400"}
                            transition={"all .3s ease"}
                            _hover={{ bg: "green.500", textColor: "white" }}
                        >
                            {pet?.adoptionStatus}
                        </Button>
                    ) : (
                        <Text as={Text} fontSize={"m"} fontWeight={600} color={useColorModeValue("red.700", "red.400")}>
                            {pet?.adoptionStatus}
                        </Text>
                    )}

                    <Text
                        fontSize={"sm"}
                        as={NavLink}
                        to={`/search/pet/${_id}`}
                        fontWeight={400}
                        variant={"link"}
                        color={useColorModeValue("gray.700", "gray.400")}
                        colorScheme={"red"}
                        p={2}
                        transition={"all .3s ease"}
                    >
                        See More
                    </Text>
                </Stack>
            </Flex>
        </Stack>
    );
}
