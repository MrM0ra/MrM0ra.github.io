import React, {useContext} from 'react';
import {UserContext} from '../../context/UserContext';

export const Registry = (props) => {

    const {changeUserName, changePwd} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
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
