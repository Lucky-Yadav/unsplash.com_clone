import React from "react";
import "./NavbarCSS/Navbar.css"
import { Navbar1 } from "./Navbar1";
import { Navbar2 } from "./Navbar2";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { isLogin } from "../Redux/action";

export const Navbar = () => {

   const dispatch = useDispatch()
   // const { logedIn } = useSelector((state) => state)

   React.useEffect(() => {
      if(localStorage.getItem("AuthToken") && localStorage.getItem("AuthToken") !== null){
            dispatch(isLogin(true))
         }else{
            dispatch(isLogin(false))
         }
   },[dispatch])


     return (
        <Box className="navbar">
         <Navbar1 />
         <Navbar2 />
        </Box>
     )
}