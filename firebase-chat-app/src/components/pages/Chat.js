import React, {useContext, useState} from "react";
import {UserContext} from '../../context/UserContext';
import {MessageApp} from '../container/MessageApp';
import * as uuid from 'uuid';
import {addMessage} from '../../Firebase';

export const Chat = (props) => {
    const {userName, userID} = useContext(UserContext);
    const [newMessage, setNewMessage] = useState({});
    
    const handleChange = (event) =>{
        event.preventDefault();
        setNewMessage({ownerId: userID, id: uuid.v1(), owner: userName, msg: event.target.value, responses: []});
    }

    const [messages, setMessages] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessages((prev) => [...prev, newMessage]);
        addMessage(newMessage, userID);
        setNewMessage({});
        document.querySelector('#message').value = '';
    }

    const deleteMessage = (id) => {
        setMessages((prev)=>{
            return prev.filter(msg => msg['id']!==id);
        });
    }

    return(
        <div>
            <div>
                <h1>Hola {userName}!</h1>
            </div>
            <div>
                <MessageApp user={userName} deleteMessage={deleteMessage} messages={messages}/>
            </div>
            <div>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <input type="text" id="message" onChange={handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}
