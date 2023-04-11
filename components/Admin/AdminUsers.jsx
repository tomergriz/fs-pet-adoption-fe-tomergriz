import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import CheckBox from "./CheckBox";
import axios from "axios";

export default function AdminUsers() {
    const [users, setUsers] = useState({});
    const { token, currentUser, SERVER_URL } = useUserContext();

    useEffect(() => {
        loadUsers();
    }, [token, currentUser]);

    const loadUsers = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}/users/all`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("res", res);
            setUsers(res?.data);
        } catch (err) {
            logout();
            console.log("Error loading users:", err);
        }
    };

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
                            <Th>Is Admin</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.length > 0 &&
                            users.map((user) => (
                                <Tr key={user._id}>
                                    <Td>{user.email} </Td>
                                    <Td>{user.firstName}</Td>
                                    <Td>{user.lastName}</Td>
                                    <Td>{user.phone}</Td>
                                    <Td>
                                        <CheckBox user={user} />
                                    </Td>
                                </Tr>
                            ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Email</Th>
                            <Th>First Name</Th>
                            <Th>Last Name</Th>
                            <Th>Phone</Th>
                            <Th>Is Admin</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </>
    );
}
