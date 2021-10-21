import React from "react";
import {MessageDisplayer} from '../container/MessagesDisplayer';

export const MessageApp = (props) => {

    const renderMessages = () => {
        return props.messages.map( (msg, index) => <MessageDisplayer key={index} msg={msg}/>);
    }

    return(
        <div>
            {renderMessages()}
        </div>
    );
}