import { Box } from "@chakra-ui/react";
import React from "react";
import PetGrid from "./PetGrid";
import SingleCard from "./SingleCard";
import { products } from "./_data";

export default function Cards() {
    return (
        <Box
            maxW="7xl"
            mx="auto"
            px={{
                base: "4",
                md: "8",
                lg: "12",
            }}
            py={{
                base: "6",
                md: "8",
                lg: "12",
            }}
        >
            <PetGrid>
                {products.map((product) => (
                    <SingleCard key={product.id} product={product} />
                ))}
            </PetGrid>
        </Box>
    );
}
