import React from "react";
import './index.css';

export default class Instruction extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainColor: {color: "#222222"}, secondColor: {color: "#888888"}};
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}, secondColor: {color: "#aaaaaa"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}, secondColor: {color: "#888888"}});
        }
    }

    render(){
        return(
            <div className="instruction">
                <span style={this.state.secondColor}>{this.props.number}</span>
                <span style={this.state.mainColor}>{this.props.text}</span>
            </div>
        );
    }
}
