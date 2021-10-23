import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const AuthProvider =({children}) => {
    const [userName, setUserName] = useState('');
    const [userPwd, setUserPwd] = useState('');
    
    const changeUserName = (arg) => {
        setUserName(arg);
    }

    const changePwd = (arg) => {
        setUserPwd(arg);
    }

    return (
        <UserContext.Provider value={{userName, userPwd, changeUserName, changePwd}}>
            {children}
        </UserContext.Provider>
    )
}
