import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const { currentUser } = useUserContext();


    // If not logged in - redirect
useEffect(() => {
    if (!currentUser?.token) {
        return navigate('/');
    }
}, [currentUser])


    return children;
}

export default PrivateRoute;