import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar2 = () => {

    return (
        <Box maxWidth={"100%"} sx={{display:"flex", margin:"auto", paddingTop:0.8, paddingLeft:3, paddingRight:"4%", paddingBottom:2, alignItems:"center", justifyContent:"center", color:"#757575"}}>
            <Link to="/" className="onHover">Editorial</Link>
            <Box sx={{color:"#7e7b7bd5", borderLeft:1, marginLeft:"10px", marginRight:"10px", borderColor:"#7e7b7bd5", height:30}}></Box>

            <Box className="scroll" sx={{display:"flex", overflowX:"scroll", outline:"none"}}>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Current Events</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Wallpapers</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">3D Renders</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Textures & Patterns</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Experimental</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Architecture</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Nature</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Business & Work</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Fashion</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Film</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Food & Drink</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Health & Wellness</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">People</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Interiors</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Street Photography</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Travels</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Animals</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Spirituality</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Arts & Culture</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">History</Link>
                <Link to="#" style={{fontSize:"15px"}} className="onHover">Athletics</Link>
            </Box>
        </Box>
    )
}