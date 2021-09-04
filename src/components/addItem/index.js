import React from "react";
import "./index.css";
import Add from "../../img/add.svg";

export default class AddItem extends React.Component{
    render(){
        return(
            <button className='addItem listItem' onClick={this.props.function}>
                <span>{this.props.text}</span>
                <img src={Add} alt="Add" align='right'/>
            </button>
        );
    }
}