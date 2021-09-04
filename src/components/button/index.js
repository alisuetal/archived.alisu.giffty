import React from "react";
import './index.css';

export default class Button extends React.Component{
    constructor(props){
        super(props);
        if(this.props.button === true || this.props.button === undefined){
            this.state = {style: {backgroundColor: "#8542c8"}};
        }
        else{
            this.state = {style: {backgroundColor: "#a284c2"}};
        }
        this.shouldClick = this.shouldClick.bind(this);
    }

    shouldClick(x){
        if(x === true){
            this.setState({style: {backgroundColor: "#8542c8"}});
        }
        else{
            this.setState({style: {backgroundColor: "#a284c2"}});
        }
    }    

    render(){
        return(
            <button style={this.state.style} className="button">
                {this.props.value}
                <img src={this.props.image} alt={this.props.alt} align="right"/>
            </button>
        );
    }
}