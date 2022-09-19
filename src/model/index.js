

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {renderErrorMessage} from '../view/index'


export let createNewUser = (fistname, lastname, email, password,)=>{

    const auth = getAuth();
 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential)=> {
    console.log(userCredential);
    // const user = userCredential.user;
    //hien thi thanh coong
    renderErrorMessage("server-error-message", "successful")

 })
 .catch((err) =>{
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);
    renderErrorMessage("server-error-message", errorMessage);
 });
}