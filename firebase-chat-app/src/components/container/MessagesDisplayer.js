import React from "react";
import { styles } from "../../styles/styles";

export const MessageDisplayer = (props) => {
    return(
        <div style={styles.messageBubble}>
            <div>
                <span><b>{props.msg.owner}: </b></span>
                {props.msg.msg}
            </div>
            <button>Editar</button>
            <button>Eliminar</button>
            <button>Responder</button>
        </div>
    );
}
