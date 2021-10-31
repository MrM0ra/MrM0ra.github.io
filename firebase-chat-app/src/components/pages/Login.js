import React, { useContext } from 'react';
import {UserContext} from '../../context/UserContext';
import { validateCredentials } from '../../Firebase';
//import {styles} from '../../styles/styles';

export const Login = (props) => {

    const {userName, changeUserName, changePwd, userPwd, changeAuth, changeUserID} = useContext(UserContext);

    const handleChangeUserName = (event) => {
        changeUserName(event.target.value);
    }

    const checkExistence = () => {
        validateCredentials(userName, userPwd).then(res => {
            if(res!==false) {
                changeAuth(true);
                changeUserID(res);
                props.history.push("/chat");
            }else{
                alert("¡Usuario y/o contraseña incorrectos!");
            }
        });
    }

    const handleChangePwd = ({target}) => {
        changePwd(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        checkExistence();
    }

    const handleRegisterClick = (event) => {
        event.preventDefault();
        props.history.push("/register");
    }

    return(
        <div style={{display: 'table-caption'}}>
            <form onSubmit={handleSubmit} autoComplete="off">
                <span>Username</span>
                <input onChange={handleChangeUserName} id='username-input'/>
                <span>Password</span>
                <input onChange={handleChangePwd} type="password" id='pwd-input'/>
                <input type="submit" value="LogIn"/>
                <button type="submit" onClick={handleRegisterClick}>Register</button>
            </form>
        </div>
    );
}
