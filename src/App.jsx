import { useState } from "react";
import { Helmet } from "react-helmet";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import UserContextProvider from "../context/UserContext";
import MenuBar from "../components/NavBar/MenuBar";
import HomePage from "../Pages/HomePage";
import SearchPage from "../Pages/SearchPage";
import ProfilePage from "../Pages/ProfilePage";
import Dashboard from "../Pages/AdminPages/DashboardPage";
import AddPetPage from "../Pages/AddPetPage";
import Page404 from "../Pages/Page404";
import PrivateRoute from "../components/PrivateRoute";
import UnauthorizedPage from "../Pages/UnauthorizedPage";
import PetContextProvider from "../context/PetContext";
import MyPets from "../Pages/MyPets";
import PetCardPage from "../Pages/PetCardPage";

function App() {
    return (
        <>
            <Helmet>
                <meta property="og:title" content="Pet Adoption Platform" />
                <meta property="og:description" content="The number of euthanized animals could be reduced dramatically if more people adopt pets instead of buying them. When you adopt dogs and cats, you save a loving animal by making them part of your family and open up shelter space for another animal who might desperately need it." />
                <meta property="og:image" content="https://res.cloudinary.com/dslnuaqdh/image/upload/v1683058834/Emotional-Industry_ladyti.jpg" />
                <meta property="og:url" content="https://pet-adoption-o.netlify.app/" />
            </Helmet>
            <UserContextProvider>
                {/* <PetContextProvider> */}
                <MenuBar />
                <Box>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<SearchPage />} />

                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <ProfilePage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/myPets"
                            element={
                                <PrivateRoute>
                                    <MyPets />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/Dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/AddPetPage"
                            element={
                                <PrivateRoute>
                                    <AddPetPage />
                                </PrivateRoute>
                            }
                        />
                        <Route path="search/pet/:id" element={<PetCardPage />} />
                        <Route path="/UnauthorizedPage" element={<UnauthorizedPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Box>
                {/* </PetContextProvider> */}
            </UserContextProvider>
        </>
    );
}

export default App;
