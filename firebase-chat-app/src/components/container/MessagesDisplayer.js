import React from "react";

export const MessageDisplayer = (props) => {
    return(
        <div>
            <span><b>{props.msg.owner}: </b></span>
            {props.msg.msg}
        </div>
    );
}