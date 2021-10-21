import React, {useContext, useState} from "react";
import {UserContext} from '../../context/UserContext';
import {MessageApp} from '../container/MessageApp';

export const Chat = (props) => {
    const {userName} = useContext(UserContext);
    const [newMessage, setNewMessage] = useState({});
    const handleChange = (event) =>{
        event.preventDefault();
        setNewMessage({owner: userName, msg: event.target.value });
    }

    const [messages, setMessages] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setMessages((prev) => [...prev, newMessage]);
        setNewMessage({});
        document.querySelector('#message').value = '';
    }

    return(
        <div>
            <div>
                <h1>Hola {userName}!</h1>
            </div>
            <div>
                <MessageApp user={userName} messages={messages}/>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="message" onChange={handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
}
