import React from "react";
import './HeaderButton.scss'

export function HeaderButton(props){

    const moveToPage = () =>{
        window.location = "https://github.com/"
    }

    return(
        <button className="Button" onClick={()=>moveToPage()}>{props.name}</button>
    );



}
