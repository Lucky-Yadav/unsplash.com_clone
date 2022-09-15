import React from "react";
import "../Auth/Auth.css"
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { formSchema } from "./SignupSchema";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogin } from "../Redux/action";
import { GoogleLogin } from "react-google-login"
import { gapi } from "gapi-script"
import GoogleIcon from '@mui/icons-material/Google';

export const SignUp = () => {
    const [State, setState] = React.useState(true)
    const [googleState, setGoogleState] = React.useState(true)
    const [googleData, setGoogleData] = React.useState({})
    const [msg, setMsg] = React.useState(false)
    const defaultProfile = "data:image/png;base64,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";
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = () => {
        
        fetch(`http://localhost:8080/usersData`)
        .then((res) => (res.json()))
        .then((res) => res.forEach(items => {
            if(items.email === values.email){
                setState(true)
                setMsg(true)
            }
        },
        setState(false)
        ))
    }

    React.useEffect(() => {

        const payload = {
            firstname:values.firstname,
            lastname: values.lastname,
            email:values.email,
            username:values.username,
            password:values.password,
            profilepic: defaultProfile,
            token: uuid()
        }

        if(State === false){
            fetch(`http://localhost:8080/usersData`,{
                method:"POST",
                body: JSON.stringify(payload),
                headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then((res) => res.json())
                .then(() => setState(true),setMsg(false), dispatch(isLogin(true)), localStorage.setItem("AuthToken", JSON.stringify(payload.token)))
                .catch((err) => console.log(err))
                navigate("/")
        }
        // eslint-disable-next-line
    },[State])




    const {values, touched, errors, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit
    })



    const clientId = "975974025399-697jnr8632c8q8v0kfdg8efsr0u0grmm.apps.googleusercontent.com"
    const onSuccess = (res) => {

        const payload = {
            firstname:res.profileObj.name,
            lastname: res.profileObj.familyName,
            email:res.profileObj.email,
            username:res.profileObj.givenName,
            password:"",
            profilepic: res.profileObj.imageUrl,
            token: uuid()
        }
        setGoogleData(payload)

        fetch(`http://localhost:8080/usersData`)
        .then((response) => (response.json()))
        .then((response) => response.forEach(items => {
            if(items.email === res.profileObj.email){
                localStorage.setItem("AuthToken", JSON.stringify(items.token))
                setGoogleState(true)
                dispatch(isLogin(true))
                navigate("/")
            }
        },
        setGoogleState(false)
        ))
    }

    React.useEffect(() => {

    if(googleState === false){
        fetch(`http://localhost:8080/usersData`,{
            method:"POST",
            body: JSON.stringify(googleData),
            headers:{
                    "Content-Type":"application/json"
            }
           })
            .then((res) => res.json())
            .then(() => dispatch(isLogin(true)), localStorage.setItem("AuthToken", JSON.stringify(googleData.token)), navigate("/"))
            .catch((err) => console.log(err))
    }
    // eslint-disable-next-line
    },[googleState])

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
        <Box id="signupContainer" sx={{display:"flex"}}>

            <Box className="imgPart" sx={{display:"flex", flexDirection:"column", color:"white", padding: "5%"}}>
                <img alt="Logo" style={{boxSizing:"border-box",marginBottom:"10%", width:40}} src="https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg" />
                <h1 style={{fontSize:"48px"}}>Creation Starts Here</h1>
                <h2>Access 4,005,353 free, high-resolution photos you can’t find anywhere else</h2>
            </Box>



            <Box className="formPart" sx={{boxSizing:"border-box", display:"flex", height:"100vh", padding:"400px 10% 10% 10%", overflowY:"scroll", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>

            <h1 style={{fontSize:48}}>Join Unsplash</h1>
            <p style={{marginTop:10}}>Already have an Account? <Link className="onHover" to="/login" style={{marginLeft:-8, textDecoration:"underline"}}>Login</Link> </p>
            


            <Box>
                <GoogleLogin
                clientId={ clientId }
                render={renderProps => (
                    <button onClick={renderProps.onClick} className="googleLogin"><GoogleIcon sx={{marginRight:2}}/>Signup with Google</button>
                  )}
                buttonText="Login"
                onSuccess={ onSuccess }
                onFailure={ onFailure }
                cookiePolicy={'single_host_origin'}
                />
            </Box>
            <p style={{fontSize:"14px", color:"grey", marginTop:10}}> OR </p>

            <Box id="msg">
                {msg? <p>This Email is already Registered.<Link className="onHover" to="/login" style={{color:"rgb(36, 36, 36)", textDecoration:"underline"}}>Login?</Link> </p>:null}
            </Box>


            <Box sx={{width:"100%", marginTop:-1}}>
            <form onSubmit={handleSubmit}>

            <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <div>
            <label className={values.firstname === "" && touched.firstname?"inputErrorLabel":"inputLabel"} htmlFor='firstname'>First Name</label><br />
            <input
            id='firstname'
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            type={'text'}
            className={values.firstname === "" && touched.firstname?"inputError":"inputValue"}/>
            </div>

            <div>
            <label className={values.lastname === "" && touched.lastname?"inputErrorLabel":"inputLabel"} htmlFor='lastname'>Last Name</label><br />
            <input id='lastname'
            type={'text'}
            value={values.lastname}
            className={values.lastname === "" && touched.lastname?"inputError":"inputValue"}
            onChange={handleChange}
            onBlur={handleBlur}/>
            </div>
            </Box>

            <div>
            <label className={((values.email === "" || errors.email) && touched.email)?"inputErrorLabel":"inputLabel"} htmlFor='email'>Email</label><br />
            <input
            id='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type={"email"} 
            className={((values.email === "" || errors.email) && touched.email)?"inputError":"inputValue"}/>
            </div>

            <div>
            <label className={values.username === "" && touched.username?"inputErrorLabel":"inputLabel"} htmlFor='username'>Username</label><br />
            <input id='username'
            type={"text"}
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={values.username === "" && touched.username?"inputError":"inputValue"}/>
            </div>

            
            <div>
            <label className={((values.password === "" || errors.password) && touched.password)?"inputErrorLabel":"inputLabel"} htmlFor='password'>Password</label><br />
            <input id='password'
            type={"password"}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={((values.password === "" || errors.password) && touched.password)?"inputError":"inputValue"}/>
            </div>
            <br />

            <input type={"submit"} id="submit" className="join"/>
        </form>
        </Box>
        </Box>
        </Box>
    )
}