import React from 'react';
import { useNavigate } from "react-router-dom";

const RequiredAuth = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/path/to/push");
    }

    return (
        <div>
            <button onClick={handleClick} type="button" />
        </div>
    );
}

export default RequiredAuth;

