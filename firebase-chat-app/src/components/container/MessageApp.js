import React from "react";
import {MessageDisplayer} from '../container/MessagesDisplayer';

export const MessageApp = (props) => {

    const renderMessages = () => {
        return props.messages.map( (msg, index) => <MessageDisplayer deleteMessage={props.deleteMessage} key={index} msg={msg}/>);
    }

    return(
        <div style={{display: 'grid'}}>
            {renderMessages()}
        </div>
    );
}