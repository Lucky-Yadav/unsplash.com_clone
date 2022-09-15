import React from "react";
import "../Auth/Auth.css"
import { Box } from "@mui/material"
import { GoogleLogin } from "react-google-login"
import { gapi } from "gapi-script"
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogin } from "../Redux/action";


export const LogIn = () => {
    const clientId = "975974025399-697jnr8632c8q8v0kfdg8efsr0u0grmm.apps.googleusercontent.com"
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const [bool, setBool] = React.useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = () => {
        fetch(`http://localhost:8080/usersData`)
        .then((res) => res.json())
        .then((res) => res.forEach((items) => {
            if(items.email === email){
                if(items.password === password){
                    setBool(false)
                    localStorage.setItem("AuthToken", JSON.stringify(items.token))
                    dispatch(isLogin(true))
                    navigate("/")
                }
            }else{
                setBool(true)
            }
        }))
    }

    const onSuccess = (res) => {
        fetch(`http://localhost:8080/usersData`)
        .then((response) => response.json())
        .then((response) => response.forEach((items) => {
            if(items.email === res.profileObj.email){
                localStorage.setItem("AuthToken", JSON.stringify(items.token))
                dispatch(isLogin(true))
                navigate("/")
            }else{
                setBool(true)
            }
        }))
    }


    const onFailure = (res) => {
        console.log("Login Failed, res:", res)
    }

    React.useEffect(() => {
        function start(){
            gapi.client.init({
                clientId:clientId,
                cookiepolicy: 'single_host_origin',
                scope:""
            })
        }

        gapi.load("client:auth2", start)
    })

    return (
        <Box sx={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <img alt="Logo" style={{width:"70px", height:"auto", marginTop:12}} src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg" />
            <h1 style={{marginTop:30,marginBottom:-7, fontSize:"34px"}}>Login</h1>
            <p>Welcome Back</p>


            <Box>
                <GoogleLogin
                clientId={ clientId }
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="googleLogin"><GoogleIcon sx={{marginRight:2}}/>Login with Google</button>
                  )}
                buttonText="Login"
                onSuccess={ onSuccess }
                onFailure={ onFailure }
                cookiePolicy={'single_host_origin'}
                />
            </Box>
            <p style={{fontSize:"14px", color:"grey"}}> OR </p> 
            {bool?<Box sx={{display:"flex", width:"450px", height:"30px", justifyContent:"center",marginTop:1, alignItems:"center", backgroundColor:"rgb(255, 192, 192)"}}> Incorrect Email or password</Box>:null }
            <div style={{width:"450px", marginTop:5}}>
                <label className="loginLabel" >Email</label><br />
                <input className="loginInput"  value={email} onChange={(e) => setEmail(e.target.value)} type={"text"} /><br />

                <label className="loginLabel">Password</label><br />
                <input className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} />

                <input onClick={handleSubmit} className="loginSubmit" type={"submit"} />
            </div>
        </Box>
    )
}