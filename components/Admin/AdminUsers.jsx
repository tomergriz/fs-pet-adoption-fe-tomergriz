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
import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import axios from "axios";

export default function AdminUsers() {
    const { SERVER_URL } = useUserContext();
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}/users/all`);
            setUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

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
                        {users.map((user) => (
                            <Tr key={user._id}>
                                <Td>{user.email} </Td>
                                <Td>{user.firstName}</Td>
                                <Td>{user.lastName}</Td>
                                <Td>{user.phone}</Td>
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
