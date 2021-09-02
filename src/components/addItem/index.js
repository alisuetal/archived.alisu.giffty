import React from "react";
import "./index.css";
import Add from "../../img/add.svg";

export default class AddItem extends React.Component{
    render(){
        return(
            <div>
                <button className='addItem' onClick={this.props.function}>
                    <span>{this.props.text}</span>
                    <img src={Add} alt="Add" align='right'/>
                </button>
            </div>
        );
    }
}