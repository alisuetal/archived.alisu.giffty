import React from "react";
import './index.css';

export default class SquareButton extends React.Component{
    render(){
        //decide if it's going to be functional or not
        let button;
        if(this.props.button === true || this.props.button === undefined){
            button = <button style={{opacity: "1"}} className="squareButton" onClick={this.props.function}/>;
        }
        else{
            button = <button style={{opacity: "0.5"}} className="squareButton"/>;
        }

        return(
            <>{button}</>
        );
    }
}