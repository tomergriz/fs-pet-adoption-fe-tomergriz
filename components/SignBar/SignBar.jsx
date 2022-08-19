import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
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
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon,
} from "@chakra-ui/icons";
import React, { useState } from "react";
import LogInModal from "./LogInModal";
import { NavLink } from "react-router-dom";

// const NavLink = ({ children }) => (
//     <Link
//         px={2}
//         py={1}
//         rounded={"md"}
//         _hover={{
//             textDecoration: "none",
//             bg: useColorModeValue("gray.200", "gray.700"),
//         }}
//         href={"#"}
//     >
//         {children}
//     </Link>
// );

export default function SignBar() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const {
        isOpen: darkIsOpen,
        onOpen: darkOnOpen,
        onClose: darkOnClose,
    } = useDisclosure();
    // const [ modalIsOpen, modalOnOpen ] = useState(false);
    const {
        isOpen: modalIsOpen,
        onOpen: modalOnOpen,
        onClose: modalOnClose,
    } = useDisclosure();

    return (
        <Box maxW={"7xl"}>
            <Flex
                bg={useColorModeValue("white", "gray.800")}
                color={useColorModeValue("gray.600", "white")}
                minH={"60px"}
                py={{ base: 2 }}
                px={{ base: 4 }}
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
                    <Button //modallllllllllllllll
                        // display = {"none"}
                        fontSize={"sm"}
                        fontWeight={600}
                        color={"white"}
                        bg={"pink.400"}
                        href={"#"}
                        top="0"
                        onClick={modalOnOpen}
                        _hover={{
                            bg: "pink.300",
                        }}
                    >
                        Login
                    </Button>

                    {modalIsOpen && (
                        <LogInModal
                            isOpen={modalIsOpen}
                            onClose={modalOnClose}
                        />
                    )}
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
    const popoverContentBgColor = useColorModeValue("white", "gray.800");

    return (
        <Stack direction={"row"} spacing={4}>
            <Box>
                <Popover trigger={"hover"} placement={"bottom-start"}>
                    <Box
                        p={2}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                            textDecoration: "none",
                            color: linkHoverColor,
                        }}
                    >
                        <Link mr={5} as={NavLink} to="/" title="home">
                            Home
                        </Link>
                        <Link as={NavLink} to="/search" title="search">
                            Search
                        </Link>
                    </Box>

                    {
                        <PopoverContent
                            border={0}
                            boxShadow={"xl"}
                            bg={popoverContentBgColor}
                            p={4}
                            rounded={"xl"}
                            minW={"sm"}
                        >
                            <Link as={NavLink} to="/search" title="search">
                            Search6
                        </Link>
                            <Link as={NavLink} to="/search" title="search">
                            Search6
                        </Link>
                            <Stack>
                                {/* {navItem.children.map((child) => (
                                        <DesktopSubNav
                                            key={child.label}
                                            {...child}
                                        />
                                        
                                    ))} */}
                                <NavLink to="/search" title="search">
                                    Search3
                                </NavLink>
                            </Stack>
                        </PopoverContent>
                    }
                </Popover>
            </Box>
            {/* ))} */}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        // <Link
        //     href={href}
        //     role={"group"}
        //     display={"block"}
        //     p={2}
        //     rounded={"md"}
        //     _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        // >
        <NavLink to="/search" title="search">
            Search4
            <Stack direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"pink.400"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </NavLink>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            display={{ md: "none" }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                // href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("gray.600", "gray.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse
                in={isOpen}
                animateOpacity
                style={{ marginTop: "0!important" }}
            >
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                    align={"start"}
                >
                    <NavLink to="/search" title="search">
                        Search5
                    </NavLink>
                    {/* {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))} */}
                </Stack>
            </Collapse>
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: "Inspiration",
        children: [
            {
                label: "Explore Design Work",
                subLabel: "Trending Design to inspire you",
                href: "#",
            },
            {
                label: "New & Noteworthy",
                subLabel: "Up-and-coming Designers",
                href: "#",
            },
        ],
    },
    {
        label: "Find Work",
        children: [
            {
                label: "Job Board",
                subLabel: "Find your dream design job",
                href: "#",
            },
            {
                label: "Freelance Projects",
                subLabel: "An exclusive list for contract work",
                href: "#",
            },
        ],
    },
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Search",
        href: "/search",
    },
];
//     const { isOpen, onOpen, onClose } = useDisclosure();

//     const initialRef = React.useRef(null);
//     const finalRef = React.useRef(null);

//     return (
//         <>
//             <Flex>
//                 <Button
//                     fontSize={"sm"}
//                     fontWeight={600}
//                     color={"white"}
//                     bg={"pink.400"}
//                     href={"#"}
//                     top="0"
//                     right="5"
//                     onClick={modalOnOpen}
//                     _hover={{
//                         bg: "pink.300",
//                     }}
//                 >
//                     Login
//                 </Button>
//             </Flex>
//             {modalOnOpen && <LogInModal isOpen={modalIsOpen} onClose={modalOnClose} />}
//         </>
//     );
