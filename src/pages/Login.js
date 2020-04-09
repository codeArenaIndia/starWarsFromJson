import React, { useState } from 'react';
import { Redirect,useLocation } from "react-router-dom";
import LoginHeader from '../Components/Presentational/Login-Header';
import {TextInput, PasswordInput} from '../Components/Input'
import { Button} from "react-bootstrap";
//import axios from 'axios';
import "../Components/Helper/Style/Login.css";
import {localAuthUser} from '../Components/Helper/Helper';

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth,setIsAuth] = useState(false);
  const [loginError,setLoginError] = useState(false);
  const [loading,setLoading] = useState(false);
  const location = useLocation();

  if (isAuth) {
    return <Redirect to="/planets"/>
  }
  
  if (location.state && location.state.logout === true) {
    localStorage.removeItem("user");
  }

 function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    /****Local authentication if swapi is down ******************/
    
   // console.log(authLocal);

    setLoading(true);

    try{
      //TO AUTHENTICATE FROM API UNCOMMENT THE BELOW THREE LINES AND COMMENT LINE WITH authLocal variable
     //   const res =  await axios.get(`https://swapi.co/api/people/?search=${username}&format=json`);
     //   let response= res.data;
     //   if(username.toLowerCase() === response.results[0].name.toLowerCase() && password === response.results[0].birth_year ){
     
     //TO AUTHENTICATE FROM LOCAL JSON FILE FETCH FROM 
     const authLocal = localAuthUser(username,password);
     if(authLocal){

          let timeNow = new Date();
          localStorage.setItem('user',JSON.stringify({"isLoggedIn":true,"username":username}));
          localStorage.setItem('counter',JSON.stringify({"count":1,"time": timeNow.getTime(),'username':username}));
          setIsAuth(true);
        }
        else {
          setLoginError(true);
        }
    } catch (err){
      setLoginError(true);
    }
    setLoading(false);
  }

  return (
    <div className="Login">
      <LoginHeader/>
      <form onSubmit={handleSubmit}>
            <TextInput username={username} setUsername={setUsername}/>
            <PasswordInput setPassword={setPassword} password={password}/>
            <Button block className="btn-success"  disabled={!validateForm()} type="submit">{loading ? "Loading..." : "Login"}</Button>
            {loginError ? (<div style={{marginTop:"20px"}} className="alert alert-danger alert-dismissible fade show">Invalid Credentials</div>) : ("")}
      </form>
    </div>
  );
}