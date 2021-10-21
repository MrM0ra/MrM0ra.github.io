import React from "react";
import { styles } from "../../styles/styles";

export const MessageDisplayer = (props) => {
    return(
        <div style={styles.messageBubble}>
            <span><b>{props.msg.owner}: </b></span>
            {props.msg.msg}
        </div>
    );
}