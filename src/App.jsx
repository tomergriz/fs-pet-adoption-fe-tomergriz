import { Heading, Box, Flex, Spacer, VStack, Button, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "../Pages/HomePage";
import SearchPage from "../pages/SearchPage";
import SignBar from "../components/SignBar/SignBar.jsx";

function App() {
    const baseUrl = "http://localhost:8080";

        const { colorMode, toggleColorMode } = useColorMode()


    return (
        <>
                {/* <NavBar /> */}
                <header>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </header>
                    <SignBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
            {/* { <Heading as="h1" color="brand.color3">Hello world!</Heading>} */}
        </>
    );
}

export default App;
