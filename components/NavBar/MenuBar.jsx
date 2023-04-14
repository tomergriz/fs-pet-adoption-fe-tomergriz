import {
    Box,
    Flex,
    Container,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    useColorModeValue,
    useDisclosure,
    Avatar,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuDivider,
    useColorMode,
    Center,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    PopoverTrigger,
    Popover,
    PopoverContent,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import LogInModal from "./LogInModal";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import jwtDecode from "jwt-decode";

export default function SignBar() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const { currentUser, setCurrentUser, token, setToken, user } = useUserContext();

    const { isOpen: modalIsOpen, onOpen: modalOnOpen, onClose: modalOnClose } = useDisclosure();

    async function logout() {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        setCurrentUser({});
        setToken(null);
    }

    console.log("currentUser", currentUser);

    return (
        <Box>
            <Flex
                maxW={{ base: "95vw", md: "98vw" }}
                bg={useColorModeValue("white", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 2 }}
                pl={{ base: 4 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.900")}
                align={"center"}
                width={"100vw"}
                z-index={3}
            >
                <Flex
                    // flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<HamburgerIcon w={5} h={5} />}
                            bg={useColorModeValue("white", "gray.800")}
                            variant={"ghost"}
                            aria-label={"Toggle Navigation"}
                        ></MenuButton>
                        <MenuList
                            mt={2}
                            borderStyle={"solid"}
                            borderColor={useColorModeValue("gray.200", "gray.700")}
                            fontWeight={600}
                            color={useColorModeValue("gray.600", "gray.200")}
                            _groupHover={{ color: "pink.400" }}
                        >
                            <MenuItem
                                as={NavLink}
                                to="/"
                                transition={"all .3s ease"}
                                _hover={{
                                    color: "pink.400",
                                }}
                            >
                                Home
                            </MenuItem>
                            <MenuItem
                                as={NavLink}
                                to="/search"
                                transition={"all .3s ease"}
                                _hover={{
                                    color: "pink.400",
                                }}
                            >
                                Search
                            </MenuItem>
                            {currentUser.token !== undefined && (
                                <MenuItem
                                    as={NavLink}
                                    to="/mypets"
                                    transition={"all .3s ease"}
                                    _hover={{
                                        color: "pink.400",
                                    }}
                                >
                                    My Pets
                                </MenuItem>
                            )}
                            {currentUser.token !== undefined && currentUser.isAdmin === true && (
                                <MenuItem
                                    as={NavLink}
                                    to="/dashboard"
                                    transition={"all .3s ease"}
                                    _hover={{
                                        color: "pink.400",
                                    }}
                                >
                                    Dashboard
                                </MenuItem>
                            )}
                            {currentUser.token !== undefined && (
                                <MenuItem
                                    as={NavLink}
                                    to="/AddPetPage"
                                    transition={"all .3s ease"}
                                    _hover={{
                                        color: "pink.400",
                                    }}
                                >
                                    Add Pet
                                </MenuItem>
                            )}
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}></Flex>

                <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                    <Flex display={{ base: "none", md: "flex" }} ml={5}>
                        <DesktopNav  currentUser={currentUser} />
                    </Flex>
                </Flex>

                <Stack px={{ base: 4 }} flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} align={"center"} spacing={6}>
                    <Link onClick={toggleColorMode} bg={useColorModeValue("white", "gray.800")}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Link>

                    {token && ( //user Profile
                        <Menu>
                            <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                                <Avatar size={"sm"} src={"https://bit.ly/ryan-florence"} />
                            </MenuButton>
                            <MenuList alignItems={"center"}>
                                <br />
                                <Center>
                                    <Avatar size={"2xl"} src={"https://bit.ly/ryan-florence"} />
                                </Center>
                                <br />
                                <Center>
                                    <p>
                                        {currentUser.firstName} {currentUser.lastName}
                                    </p>
                                </Center>
                                <br />
                                <MenuDivider />

                                <MenuItem>
                                    <Link as={NavLink} to="/profile" title="profile">
                                        Profile Settings
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={logout}>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    )}
                    {!token && ( //modal log in button
                        <Flex>
                            <Button
                                fontSize={"sm"}
                                fontWeight={600}
                                color={"white"}
                                href={"#"}
                                onClick={modalOnOpen}
                                colorScheme={"red"}
                                bg={"red.400"}
                                border={"none"}
                                transition={"all .3s ease"}
                                _hover={{ bg: "red.500" }}
                            >
                                Login
                            </Button>

                            {modalIsOpen && <LogInModal isOpen={modalIsOpen} onClose={modalOnClose} />}
                        </Flex>
                    )}
                </Stack>
            </Flex>

            {/* <Collapse in={isOpen} animateOpacity>
                <MobileNav currentUser={currentUser} />
            </Collapse> */}
        </Box>
    );
}

const DesktopNav = (props) => {
    const { currentUser } = props;
console.log("currentUser", currentUser.token);
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");

    return (
        <Stack direction={"row"} spacing={4}>
            <Box>
                <Box
                    direction={"row"}
                    p={2}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                        textDecoration: "none",
                        color: linkHoverColor,
                    }}
                >
                    <Link mr={5} as={NavLink} to="/" title="home">
                        <Text as={"span"} transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
                            Home
                        </Text>
                    </Link>

                    <Link mr={5} as={NavLink} to="/search" title="search">
                        <Text as={"span"} transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
                            Search
                        </Text>
                    </Link>
                    {currentUser.token !== undefined && (
                        <Link mr={5} as={NavLink} to="/mypets" title="mypets">
                            <Text as={"span"} transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
                                My Pets
                            </Text>
                        </Link>
                    )}
                    {currentUser.token !== undefined && currentUser.isAdmin === true && (
                        <Link mr={5} as={NavLink} to="/dashboard" title="dashboard">
                            <Text as={"span"} transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
                                Dashboard
                            </Text>
                        </Link>
                    )}
                    {currentUser.token !== undefined && (
                        <Link mr={5} as={NavLink} to="/AddPetPage" title="AddPetPage">
                            <Text as={"span"} transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
                                Add Pet
                            </Text>
                        </Link>
                    )}
                </Box>
            </Box>
        </Stack>
    );
};
