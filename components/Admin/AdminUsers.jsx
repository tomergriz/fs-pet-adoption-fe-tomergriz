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
import UserContext from "../../context/UserContext";
import React, { useContext } from "react";
import { useUserContext } from "../../context/UserContext";
export default function AdminUsers() {
    const { firstName, users } = useUserContext();
    // console.log("suers", users[0].name);

    return (
        <>
            <TableContainer>
                <Table size="sm">
                    <Thead>
                        <Tr>
                            <Th>Email</Th>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Phone</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user, index) => (
                            <Tr>
                                <Td key={user.index}>{user.email} </Td>
                                <Td key={user.index}>{user.firstName}</Td>
                                <Td key={user.index}>{user.lastName}</Td>
                                <Td key={user.index}>{user.phone}</Td>
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
