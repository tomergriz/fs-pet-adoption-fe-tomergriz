import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { useUserContext } from "../../context/UserContext";
import { usePetContext } from "../../context/PetContext";

export default function AdminPets() {
    const { pets } = usePetContext();

    return (
        <>
            <TableContainer>
                <Table size="sm">
                    <Thead>
                        <Tr>
                            <Th>Type</Th>
                            <Th>Name</Th>
                            <Th>AdoptionStatus</Th>
                            {/* <Th>Picture</Th> */}
                            <Th>Breed</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {pets.length > 0 && pets.map((pet) => (
                            <Tr key={pet._id}>
                                <Td>{pet.type} </Td>
                                <Td>{pet.name}</Td>
                                <Td>{pet.adoptionStatus}</Td>
                                {/* <Td><img src={pet.picture} alt={pet.type} style/></Td> */}
                                <Td>{pet.breed}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Email</Th>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Phone</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    );
}
