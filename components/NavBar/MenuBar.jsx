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
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    MoonIcon,
    SunIcon,
} from "@chakra-ui/icons";
import React, { useState } from "react";
import LogInModal from "./LogInModal";
import { NavLink } from "react-router-dom";

export default function SignBar() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const {
        isOpen: darkIsOpen,
        onOpen: darkOnOpen,
        onClose: darkOnClose,
    } = useDisclosure();
    const {
        isOpen: modalIsOpen,
        onOpen: modalOnOpen,
        onClose: modalOnClose,
    } = useDisclosure();

    return (
        <Box >
            <Flex
            maxW= {{ base: "95vw", md: "98vw" }}
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
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>

                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: "center", md: "start" }}
                >
                    <Flex display={{ base: "none", md: "flex" }} ml={5}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    px={{ base: 4 }}
                    flex={{ base: 1, md: 0 }}
                    justify={"flex-end"}
                    direction={"row"}
                    align={"center"}
                    spacing={6}
                >
                    <Link
                        onClick={toggleColorMode}
                        bg={useColorModeValue("white", "gray.800")}
                    >
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Link>

                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={"full"}
                            variant={"link"}
                            cursor={"pointer"}
                            minW={0}
                        >
                            <Avatar
                                size={"sm"}
                                src={"https://bit.ly/ryan-florence"}
                            />
                        </MenuButton>
                        <MenuList alignItems={"center"}>
                            <br />
                            <Center>
                                <Avatar
                                    size={"2xl"}
                                    src={"https://bit.ly/ryan-florence"}
                                />
                            </Center>
                            <br />
                            <Center>
                                <p>Username</p>
                            </Center>
                            <br />
                            <MenuDivider />
                            <MenuItem>Your Servers</MenuItem>
                            <MenuItem>Account Settings</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                    <Flex>
                    <Button //modallllllllllllllll
                        fontSize={"sm"}
                        fontWeight={600}
                        color={"white"}
                        href={"#"}
                        top="0"
                        onClick={modalOnOpen}
                        colorScheme={"red"}
                            bg={"red.400"}
                            _hover={{ bg: "red.500" }}
                    >
                        Login
                    </Button>

                    {modalIsOpen && (
                        <LogInModal
                            isOpen={modalIsOpen}
                            onClose={modalOnClose}
                        />
                    )}</Flex>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
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
                        <Text
                            as={"span"}
                            transition={"all .3s ease"}
                            _groupHover={{ color: "pink.400" }}
                            fontWeight={500}
                        >
                            Home
                        </Text>
                    </Link>
                    <Link mr={5} as={NavLink} to="/search" title="search">
                        <Text
                            as={"span"}
                            transition={"all .3s ease"}
                            _groupHover={{ color: "pink.400" }}
                            fontWeight={500}
                        >
                            Search
                        </Text>
                    </Link>
                </Box>
            </Box>
        </Stack>
    );
};

const MobileNav = () => {
    return (
        <Container
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            <Stack
                mt={2}
                pl={4}
                borderLeft={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.700")}
                align={"start"}
            >
                <Stack spacing={4}>
                    <Link as={NavLink} to="/" title="home">
                        <Text
                            fontWeight={600}
                            color={useColorModeValue("gray.600", "gray.200")}
                        >
                            Home
                        </Text>
                    </Link>
                    <Link as={NavLink} to="/search" title="search">
                        <Text
                            fontWeight={600}
                            color={useColorModeValue("gray.600", "gray.200")}
                        >
                            Search
                        </Text>
                    </Link>
                </Stack>
            </Stack>
        </Container>
    );
};
