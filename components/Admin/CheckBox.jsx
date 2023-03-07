import React, { useState, useContext, useEffect } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useUserContext } from "../../context/UserContext";
import axios from "axios";

export default function CheckBox({ user }) {
    const { SERVER_URL, currentUser, loadUsers, updateUser, token } =
        useUserContext();

    async function handleChange(e) {
        try {
            const url = `${SERVER_URL}/users/${user._id}`;
            const res = await axios.put(
                url,
                { ...user, isAdmin: e.target.checked },
                {
                    headers: {
                        authorization: "Bearer " + token,
                    },
                }
            );
            if (res) {
                loadUsers();
            }
        } catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <Checkbox
            name="checkBox"
            colorScheme="cyan"
            isChecked={user.isAdmin}
            onChange={handleChange}
        ></Checkbox>
    );
}
