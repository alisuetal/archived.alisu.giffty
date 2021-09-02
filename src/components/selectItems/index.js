import React from "react";
import DownBlack from "../../img/downBlack.svg";
import DownWhite from "../../img/downWhite.svg";
import './index.css';

export default class SelectItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = {style: {color: "#222222", backgroundImage: "url(" + DownBlack + ")"}, theme: 0};
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({style: {color: "#ffffff", backgroundImage: "url(" + DownWhite + ")"}, theme: 1});
        }
    }

    theme(e){
        if(e === 1 && this.state.theme !== 1){
            this.setState({style: {color: "#ffffff", backgroundImage: "url(" + DownWhite + ")"}, theme: 1});
        }
        else if(e === 0 && this.state.theme !== 0){
            this.setState({style: {color: "#222222", backgroundImage: "url(" + DownBlack + ")"}, theme: 0});
        }
    }

    render(){
        return(
            <select style={this.state.style} onChange={(e) => this.props.function(e)}>
                {this.props.content.map((x, y, z) => (<option key={y} value={y}>{x}</option>))}
            </select>
        );
    }
}
