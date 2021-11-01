import React, {useContext, useState, useEffect} from "react";
import {UserContext} from '../../context/UserContext';
import {MessageApp} from '../container/MessageApp';
import * as uuid from 'uuid';
import {addMessage, getAllMessages} from '../../Firebase';

export const Chat = (props) => {
    const {userName, userID, changeUserName, changeAuth } = useContext(UserContext);
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

    useEffect( () => {
        getAllMessages().then(res => {
            if(res){
                const keys = Object.keys(res);
                let oldMessages =[];
                for(let i=0;i<keys.length;i++){
                    let msgs = res[keys[i]];
                    const msgK = Object.keys(msgs);
                    for(let j=0;j<msgK.length;j++){
                        oldMessages.unshift(msgs[msgK[j]])
                    }
                }
                setMessages((prev) => [...oldMessages]);
            }
        });
    }, []);

    const deleteMessage = (id) => {
        setMessages((prev)=>{
            return prev.filter(msg => msg['id']!==id);
        });
    }

    const logout= () => {
        changeUserName('');
        changeAuth(false);
        props.history.push("/");
    }

    return(
        <div>
            <div>
                <h1>Bienvenid@ {userName}!</h1>
            </div>
            <div>
                <MessageApp user={userName} deleteMessage={deleteMessage} messages={messages}/>
            </div>
            <div style={{display: 'table-caption'}}>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <input type="text" id="message" onChange={handleChange}/>
                    <input type="submit" />
                    <input type="button" value="logout" onClick={logout}/>
                </form>
            </div>
        </div>
    );
}
