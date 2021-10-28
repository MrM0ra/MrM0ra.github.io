import React, {useContext} from 'react';
import {UserContext} from '../../context/UserContext';
import {addUser} from '../../Firebase';

export const Registry = (props) => {

    const {changeUserName, changePwd, userName, userPwd} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(userName, userPwd);
        props.history.push("/chat");
    }

    const handleChangeUserName = (event) => {
        changeUserName(event.target.value);
    }

    const handleChangePwd = (event) => {
        changePwd(event.target.value);
    }

    return (
        <div /*style={styles.body}*/>
            <div /*style={styles.box}*/>
                <form onSubmit={handleSubmit} autocomplete="off">
                    <span>Username</span>
                    <input onChange={handleChangeUserName} id='username-input'/>
                    <span>Password</span>
                    <input onChange={handleChangePwd} type="password" id='pwd-input'/>
                    <input type="submit" value="SignIng"/>
                </form>
            </div>
        </div>
    );


}
