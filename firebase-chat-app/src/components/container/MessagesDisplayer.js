import React from "react";
import { styles } from "../../styles/styles";

export const MessageDisplayer = (props) => {

    const handleEditClick = (e) => {
        
    }

    const handleDeleteClick = () => {
        props.deleteMessage(props.msg.id);
    }

    const handleReplyClick = (e) => {
        
    }

    return(
        <div style={styles.messageBubble}>
            <div>
                <span><b>{props.msg.owner}: </b></span>
                {props.msg.msg}                
            </div>
            <button onClick={handleEditClick}>Editar</button>
            <button onClick={handleDeleteClick}>Eliminar</button>
            <button onClick={handleReplyClick}>Responder</button>
        </div>
    );
}
