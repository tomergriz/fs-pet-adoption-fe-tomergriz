import React, { useState } from "react";
// import { Link } from "react-router-dome"
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
} from "@chakra-ui/react";
import { FiMenu, FiHome, FiSearch } from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "./NavItem";
import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
// import { Link as ReachLink } from "@reach/router"
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Sidebar() {
    function NavList() {
        let activeStyle = {
            textDecoration: "underline",
        };
        let activeClassName = "underline";
    }

    const [navSize, changeNavSize] = useState("small");
    return (
        <>
            <Flex
                pos="sticky"
                left="5"
                h="95vh"
                marginTop="2.5vh"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                borderRadius={navSize == "small" ? "15px" : "30px"}
                w={navSize == "small" ? "75px" : "200px"}
                flexDir="column"
                justifyContent="space-between"
            >
                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    as="nav"
                >
                    <IconButton
                        background="none"
                        mt={5}
                        _hover={{ background: "none" }}
                        icon={<FiMenu />}
                        onClick={() => {
                            if (navSize == "small") changeNavSize("large");
                            else changeNavSize("small");
                        }}
                    />
                    <NavItem
                        navSize={navSize}
                        icon={FiHome}
                        title="Home"
                        to="/"
                        as={NavLink}
                    />
                    <NavItem
                        navSize={navSize}
                        icon={FiSearch}
                        title="Search"
                        to="/search"
                        as={NavLink}
                    />
                </Flex>
                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    mb={4}
                >
                    <Divider display={navSize == "small" ? "none" : "flex"} />
                    <Flex mt={4} align="center">
                        <Avatar
                            size="sm"
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                        />
                        <Flex
                            flexDir="column"
                            ml={4}
                            display={navSize == "small" ? "none" : "flex"}
                        >
                            <Heading as="h3" size="sm">
                                Ryan Florence
                            </Heading>
                            <Text color="gray">Admin</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}
