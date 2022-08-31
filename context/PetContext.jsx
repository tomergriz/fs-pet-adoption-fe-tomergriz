import { createContext, useEffect, useContext, useState } from "react";
import axios from "axios";
export const PetContext = createContext("");
export const usePetContext = () => {
    return useContext(PetContext);
};

export default function PetContextProvider(props) {
    const [pets, setPets] = useState({});
    const [petErrMassage, setErrMassage] = useState({});

    const loadPets = async () => {
        console.log("sdsdsd");
        try {
            const res = await axios.get(`${SERVER_URL}/pets/all`);
            setPets(res.data);
            console.log(pets);
        } catch (err) {
            setErrMassage(err.petErrMassage);
            console.log(err);
        }
    };

    useEffect(() => {
        loadPets()
    }, []);

    return (
        <PetsContext.Provider value={{ pets, setPets, petErrMassage }}>
            {props.children}
        </PetsContext.Provider>
    );
}
