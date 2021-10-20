import React, {useContext} from "react";
import {UserContext} from '../../context/UserContext';

export const Chat = (props) => {
    const {userName} = useContext(UserContext);
    return(
        <div>
            <h1>Hola {userName}!</h1>
        </div>
    );
}
