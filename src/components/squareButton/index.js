import React from "react";
import './index.css';

export default class SquareButton extends React.Component{
    render(){
        return(
            <button style={this.props.style} className="squareButton" onClick={this.props.function}/>
        );
    }
}