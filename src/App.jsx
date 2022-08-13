import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "../Pages/NavBar";
// import NavBar2 from '../components/NavBar/NavBar2'
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "../Pages/HomePage";
import SearchPage from "../pages/SearchPage";

function App() {
    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="Search" element={<SearchPage />} />
            </Routes>
            {/* <NavBar2/> */}
            {/* <Heading as="h1" color="brand.color3">Hello world!</Heading>
    <Heading as="h2">Foo</Heading> */}
        </>
    );
}

export default App;
