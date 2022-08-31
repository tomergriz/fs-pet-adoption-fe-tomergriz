import { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";
export const PetContext = createContext("");
export const usePetContext = () => {
    return useContext(PetContext);
};

export default function PetContextProvider(props) {
    const SERVER_URL = "http://localhost:8080";

    const [pets, setPets] = useState({});


    const loadPets = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}/pets/all`);
            setPets(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadPets();
    }, []);

    return (
        <PetContext.Provider value={{ pets }}>
            {props.children}
        </PetContext.Provider>
    );
}
