import React, { Component } from "react";
import {
    Grid,
  
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import LogoImg from "../images/logoImg.webp"




const useStyles = makeStyles((theme) => ({
    root: {
       
        width:"130px",
        height:"150px",
        paddingTop:25


    }

}));

export default function Logo() {
    const classes = useStyles();





    return (
        <div  >
            <img className={classes.root} src={LogoImg} alt="boohoo" /> 
          
        </div>
    )
}