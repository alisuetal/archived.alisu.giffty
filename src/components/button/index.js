import React from "react";
import './index.css';

export default class Button extends React.Component{
    render(){
        return(
            <button className="button">
                {this.props.value}
                <img src={this.props.image} alt={this.props.alt} align="right"/>
            </button>
        );
    }
}