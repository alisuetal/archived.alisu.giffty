import React from "react";
import Add from "../../img/add.svg";
import "./index.css";

export default function AddItem (props){
    return(
        <button className='addItem' onClick={props.function}>
            <span>{props.text}</span>
            <img src={Add} alt="Add" align='right'/>
        </button>
    );
}