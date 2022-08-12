// import React from 'react'

// export default function Sidebar() {
//   return (
//     <div>Sidebar</div>
//   )
// }

import React, { useState } from "react";
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
} from "@chakra-ui/react";
// import {
//     FiMenu,
//     FiHome,
//     FiCalendar,
//     FiUser,
//     FiDollarSign,
//     FiBriefcase,
//     FiSettings,
// } from "react-icons/fi";
// import { IoPawOutline } from "react-icons/io5";
// import NavItem from "../components/NavItem";

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large");
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
            >Text</Flex>
        </>
    );
}
