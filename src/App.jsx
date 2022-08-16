import { Heading, Box, Flex, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "../Pages/NavBar";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "../Pages/HomePage";
import SearchPage from "../pages/SearchPage";
import SignBar from "../components/SignBar/SignBar.jsx";

function App() {
    return (
        <>
            <Box>
                {/* <NavBar /> */}
                <Box>
                    <SignBar />
                </Box>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
            </Box>
            {/* { <Heading as="h1" color="brand.color3">Hello world!</Heading>} */}
        </>
    );
}

export default App;
