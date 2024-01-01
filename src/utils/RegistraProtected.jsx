import React from "react";
import { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useAuthContext } from "../State/AuthContext";

const RegistraProtected = (props) => {
    const navigate = useNavigate();
    const location = useLocation()

    const { user } = useAuthContext()
    const [is_registrar, setIsRegistra] = useState(false);

    const checkUserToken = () => {
        const userToken = user?.resUser?.is_registrar || user?.user_type == 'admin';
        if (!userToken) {
            setIsRegistra(false);
            return navigate("...👈🏻", { state: { from: location }, replace: true });
        }
        setIsRegistra(true);
    };

    useEffect(() => {
        checkUserToken();
    }, [is_registrar]);

    return <React.Fragment>{is_registrar ? props.children : null}</React.Fragment>;
};

export default RegistraProtected;
