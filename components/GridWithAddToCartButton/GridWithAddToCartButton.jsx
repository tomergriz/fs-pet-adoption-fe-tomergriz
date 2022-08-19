import { Box } from "@chakra-ui/react";
import React from "react";
import PetGrid from "./PetGrid";
import PetCard from "./PetCard";
import { products } from "./_data";

export default function GridWithAddToCartButton() {
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
                    <PetCard key={product.id} product={product} />
                ))}
            </PetGrid>
        </Box>
    );
}
