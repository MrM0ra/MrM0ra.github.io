import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, update } from 'firebase/database';
import * as Crypto from 'crypto-js';

const generateSha256 = (pwd) => {
    return Crypto.SHA256(pwd);
}

const firebaseApp = ({
    apiKey: "AIzaSyDeGOpvl_DKZdh1vCC3KjVaDjo4E1jWWRM",
    authDomain: "firechat-b5eb7.firebaseapp.com",
    databaseURL: "https://firechat-b5eb7-default-rtdb.firebaseio.com/",
    projectId: "firechat-b5eb7",
    storageBucket: "firechat-b5eb7.appspot.com",
    messagingSenderId: "714586559822",
    appId: "1:714586559822:web:7f1659e7c9f8f265dffa1f",
    measurementId: "G-CYWN7LQMPW"
});

const app = initializeApp(firebaseApp);
const db = getDatabase();

const addUser = (userName, pwd, userid) => {
    console.log("a hashearles");
    const hashedPwd = generateSha256(pwd);
    console.log(hashedPwd);
    set(ref(db, 'users/'+ userid), {
        userId: userid,
        userName: userName,
        password: hashedPwd.toString()
    });
}

const addMessage = (msg, userID) => {
    console.log(msg.ownerId);
    set(ref(db, 'messages/'+userID+'/'+msg.id), {
        msgID: msg.id,
        owner: msg.owner,
        ownerID: msg.ownerId,
        msg: msg.msg,
        responses: msg.responses
    });
}

const editMessage = (msgID, userID, nesMSG) => {
    //Verificar si el usuario tiene ese mensaje
}

const validateCredentials = (username, userPwd) => {    
    const uid = get(child(ref(db), 'users/')).then((snapshot) => {
        if (snapshot.exists()) {
            let users = snapshot.val();
            const keys = Object.keys(users);
            let flag=false;
            for(let i=0;i<keys.length; i++){
                flag = users[keys[i]].userName === username ? true : false;
                if (flag){
                    flag = users[keys[i]].password === generateSha256(userPwd).toString() ? true : false;
                    console.log(`${users[keys[i]].password} : ${generateSha256(userPwd).toString()}`)
                    if(flag){
                        return users[keys[i]].userId;
                    }else{
                        return false;
                    }
                }
            }
            return false;
        } else {
            return false;
        }
    }).catch( error => {
        console.error(error);
    });
    return uid;
}

export { db, addUser, addMessage, editMessage, validateCredentials };
