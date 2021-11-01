import React, {useContext, useState, useEffect} from "react";
import {UserContext} from '../../context/UserContext';
import {MessageApp} from '../container/MessageApp';
import * as uuid from 'uuid';
import {addMessage, getAllMessages, deleteFBMessage } from '../../Firebase';
import {LeftSideBar} from '../container/LeftSideBar';

export const Chat = (props) => {
    const {userName, userID, changeUserName, changeAuth } = useContext(UserContext);
    const [newMessage, setNewMessage] = useState({});

    const users=null;

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
        deleteFBMessage(id, userID);
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
        <div style={{display: 'flex', justifyContent: 'left'}}>
            <LeftSideBar participants={users}/>
            <div>
                <div>
                    <h1>Bienvenid@ {userName}!</h1>
                    <div style={{height:'500px', width:'100%', overflow:'auto'}}>
                        <MessageApp user={userName} deleteMessage={deleteMessage} messages={messages}/> 
                    </div>
                </div>
                <div style={{display: 'table-caption'}}>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <input type="text" id="message" onChange={handleChange}/>
                        <input type="submit" />
                        <input type="button" value="logout" onClick={logout}/>
                    </form>
                </div>
            </div>
        </div>
    );
}
