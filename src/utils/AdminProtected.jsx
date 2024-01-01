import React from "react";
import { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useAuthContext } from "../State/AuthContext";
import { toast } from "react-toastify";
import theme from "../theme";

const AdminProtected = (props) => {
    const navigate = useNavigate();
    const palate = theme()
    const location = useLocation()

    const { user } = useAuthContext()
    const [isAdmin, setIsAdmin] = useState(false);

    const checkUserToken = () => {
        const userToken = user?.user_type;

        if (userToken !== "admin") {
            setIsAdmin(false);
            toast.error(`ERR_FORBIDDEN: thou shall not trespass`, {
                position: "top-center",
                style: {
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }
            })
            return navigate("/explore", { state: { from: location }, replace: true });
        }
        setIsAdmin(true);
    };

    useEffect(() => {
        checkUserToken();
    }, [isAdmin]);

    return <React.Fragment>{isAdmin ? props.children : null}</React.Fragment>;
};

export default AdminProtected;
