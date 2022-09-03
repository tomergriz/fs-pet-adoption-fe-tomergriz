import React, { useState, useContext, useEffect } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useUserContext } from "../../context/UserContext";
import axios from "axios";

export default function CheckBox({ user }) {
    const { SERVER_URL } = useUserContext();

    async function handleChange(e) {
        try {
            // user = { ...user, isAdmin: e.target.checked };
            // console.log("e.target.checked", e.target.checked);
            // console.log("user", user);

            const url = `${SERVER_URL}/users/${user._id}`;
            const res = await axios.put(url, {
                ...user,
                isAdmin: e.target.checked,
            });
            if (res) {
                console.log('res', res);
            }
        } catch (err) {
            console.log(err);
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
