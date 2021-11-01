import React, {useContext} from "react";
import {UserContext} from '../../context/UserContext';
import { styles } from "../../styles/styles";

export const MessageDisplayer = (props) => {

    const { userID } = useContext(UserContext);

    const handleEditClick = (e) => {
        
    }

    const handleDeleteClick = () => {
        props.deleteMessage(props.msg.id);
    }

    const handleReplyClick = (e) => {
        
    }

    return(
        <div style={styles.messageBubble} id={props.msg.id}>
            <div>
                <span><b>{props.msg.owner}: </b></span>
                {props.msg.msg}     
            </div>
            { props.msg.ownerId === userID ?
                <div>
                    <button onClick={handleEditClick}>
                        Editar
                    </button>
                    <button onClick={handleDeleteClick}>
                        Eliminar
                    </button>
                    <button onClick={handleReplyClick}>
                        Responder
                    </button>
                </div>
                :
                <div>
                    <button onClick={handleReplyClick}>Responder</button>
                </div>
            }
        </div>
    );
}
