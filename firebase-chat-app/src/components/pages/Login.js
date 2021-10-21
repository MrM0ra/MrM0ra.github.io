import React, { useContext } from 'react';
import {UserContext} from '../../context/UserContext';
//import {styles} from '../../styles/styles';

export const Login = (props) => {

    const {changeUserName, changePwd} = useContext(UserContext);

    const handleChangeUserName = (event) => {
        changeUserName(event.target.value);
    }

    const handleChangePwd = ({target}) => {
        changePwd(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.history.push("/chat");
    }

    const handleRegisterClick = (event) => {
        event.preventDefault();
        props.history.push("/register");
    }

    return(
        <div /*style={styles.body}*/>
            <div /*style={styles.box}*/>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <span>Username</span>
                    <input onChange={handleChangeUserName} id='username-input'/>
                    <span>Password</span>
                    <input onChange={handleChangePwd} type="password" id='pwd-input'/>
                    <input type="submit" value="LogIn"/>
                    <button type="submit" onClick={handleRegisterClick}>Register</button>
                </form>
            </div>
        </div>
    )
}
