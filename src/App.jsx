import { useState } from "react";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "../Pages/HomePage";
import SearchPage from "../pages/SearchPage";
import MenuBar from "../components/NavBar/MenuBar";

function App() {
    const baseUrl = "http://localhost:8080";

    return (
        <>
            <MenuBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
            {/* { <Heading as="h1" color="brand.color3">Hello world!</Heading>} */}
        </>
    );
}

export default App;
