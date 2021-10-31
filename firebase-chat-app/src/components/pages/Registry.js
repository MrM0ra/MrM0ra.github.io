import React, {useContext} from 'react';
import {UserContext} from '../../context/UserContext';
import {addUser} from '../../Firebase';
import * as uuid from 'uuid';

export const Registry = (props) => {

    const {changeUserName, changePwd, userName, userPwd, changeUserID} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        let userid = uuid.v1();
        changeUserID(userid);
        addUser(userName, userPwd, userid);
        props.history.push("/chat");
    }

    const handleChangeUserName = (event) => {
        changeUserName(event.target.value);
    }

    const handleChangePwd = (event) => {
        changePwd(event.target.value);
    }

    return (
        <div style={{display: 'table-caption'}}>
            <form onSubmit={handleSubmit} autocomplete="off">
                <span>Username</span>
                <input onChange={handleChangeUserName} id='username-input'/>
                <span>Password</span>
                <input onChange={handleChangePwd} type="password" id='pwd-input'/>
                <input type="submit" value="SignIng"/>
            </form>
        </div>
    );


}
