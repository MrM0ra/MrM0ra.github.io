import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const AuthProvider =({children}) => {
    const [userName, setUserName] = useState('');
    const [userPwd, setUserPwd] = useState('');
    //const [messages, setMessages] = useState([]);
    
    const changeUserName = (arg) => {
        setUserName(arg);
    }

    const changePwd = (arg) => {
        setUserPwd(arg);
    }

    /*const editMessages = (arg) => {
        let msgs = [...messages];
        msgs.push(arg);
        setMessages(msgs);
    }*/

    return (
        <UserContext.Provider value={{userName, userPwd, /*messages,*/ changeUserName, changePwd, /*editMessages*/}}>
            {children}
        </UserContext.Provider>
    )
}
