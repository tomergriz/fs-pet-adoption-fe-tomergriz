import React, { useState, useContext, useEffect } from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useUserContext } from "../../context/UserContext";
import axios from "axios";

export default function CheckBox({ user }) {
    const { SERVER_URL, currentUser, loadUsers, updateUser, token } = useUserContext();

    // try {
    //     const res = await axios.put(url, userInfo, {
    //         headers: {
    //             authorization: "Bearer " + currentUser.token,
    //         },
    //     });
    //     console.log("res", res);
    // } catch (err) {
    //     console.log(err);
    // }

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
                console.log("res", res);
                loadUsers();
                // updateUser(res.data, user._id);
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
