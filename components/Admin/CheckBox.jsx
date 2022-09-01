import React, { useState } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useUserContext } from "../../context/UserContext";
import axios from "axios";

export default function CheckBox({ user }) {
    
    async function handleChange(e) {
        try {
            const res = await axios.put(
                `http://localhost:8080/users/6310594b274a974abe57aa7c`,
                { ...user, isAdmin: e.target.checked }
            );
            if (res) {
                const updatedUser = res.data;
                console.log("res.data", res.data);
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <Checkbox
            name={user._id}
            onChange={handleChange}
            colorScheme="cyan"
            isChecked={user.isAdmin}
        ></Checkbox>
    );
}
