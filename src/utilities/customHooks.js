import { useState } from "react";

export function useLogin(initialValue = { userName: "", password: "" }) {
    const [user, setUser] = useState(initialValue.userName || ""); 
    const [key, setKey] = useState(initialValue.password || "");
  
    const setLogin = ({ userName = "", password = "" }) => {
     if(userName?.length>0) setUser(userName); 
     if(password?.length>0) setKey(password);
    };

    const loginRequest=()=>{
        if(user?.length>0 && key?.length>0){
            alert("Logged In")
            return true;
        }else{
           alert("fields are empty");
           return false 
        }
    }
  
    const clearLogin = () => {
      setUser("");
      setKey("");
    };
  
    return [{ user, key }, setLogin, clearLogin, loginRequest];
  }
  

  export function useSignUP(initialValue = { fName: "", lName: "", password: "" }) {
    const [firstName, setFirstName] = useState(initialValue.fName || ""); 
    const [lastName, setLastName] = useState(initialValue.lName || ""); 
    const [key, setKey] = useState(initialValue.password || "");
  
    const setSignUp = ({ fName = "", lName = "", password = "" }) => {
     if(fName?.length>0) setFirstName(fName);
     if(lName?.length>0)   setLastName(lName);
     if(password?.length>0)   setKey(password);
    };
  
    const clearSignUp = () => {
      setFirstName("");
      setLastName("");
      setKey("");
    };
    
   const signUpRequest=()=>{
    if(firstName?.length>0 &&lastName?.length>0 && key?.length>0){
        alert("Signed up")
        return true;
    }else{
       alert("fields are empty");
       return false 
    }
    }
    return [{ firstName, lastName, key }, setSignUp, clearSignUp, signUpRequest];
  }
  
  
  