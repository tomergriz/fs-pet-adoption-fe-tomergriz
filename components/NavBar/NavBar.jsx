import { Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import SignBar from "../SignBar/SignBar";

export default function NavBar() {
    return (
        <Flex >
            <Sidebar />
            {/* <SignBar/> */}
        </Flex>
    );
}
