import React from "react";
import { styles } from "../../styles/styles";

export const MessageDisplayer = (props) => {
    return(
        <div style={styles.messageBubble}>
            <select>
                <option>...</option>
                <option>Responder</option>
                <option>Eliminar</option>
                <option>Editar</option>
            </select>
            <br></br>
            <span><b>{props.msg.owner}: </b></span>
            {props.msg.msg}
        </div>
    );
}
