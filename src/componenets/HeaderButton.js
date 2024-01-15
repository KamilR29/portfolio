import React from "react";
import './HeaderButton.scss'

export function HeaderButton(props){

    // const moveToPage = () =>{
    //     window.location = "../pages/AboutMe.js"
    // }

    return(
        <button className="Button" >{props.name}</button>
    );



}
