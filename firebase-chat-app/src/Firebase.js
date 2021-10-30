import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child, update } from 'firebase/database';

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
    set(ref(db, 'users/'+ userid), {
        userId: userid,
        userName: userName,
        password: pwd
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

const checkExistingUser = (username) => {    
    const uid = get(child(ref(db), 'users/')).then((snapshot) => {
        if (snapshot.exists()) {
            let users = snapshot.val();
            const keys = Object.keys(users);
            let flag=false;
            for(let i=0;i<keys.length; i++){
                flag = users[keys[i]].userName === username ? true : false;
                if (flag){
                    return users[keys[i]].userId;
                }
            }
        } else {
            return false;
        }
    }).catch( error => {
        console.error(error);
    });
    return uid;
}

export { db, addUser, addMessage, editMessage, checkExistingUser };
