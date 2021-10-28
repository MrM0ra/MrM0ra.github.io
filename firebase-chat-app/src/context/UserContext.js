import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const AuthProvider =({children}) => {
    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [auth, setAuth] = useState(false);
    
    const changeUserName = (arg) => {
        setUserName(arg);
    }

    const changePwd = (arg) => {
        setUserPwd(arg);
    }

    const changeUserID = (arg) => {
        setUserID(arg);
    }

    return (
        <UserContext.Provider value={{auth, setAuth, userName, userPwd, changeUserName, changePwd, userID, changeUserID}}>
            {children}
        </UserContext.Provider>
    )
}
