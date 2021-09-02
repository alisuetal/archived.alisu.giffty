import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Giffty3D from "../../img/giffty3d.svg";
import Button from "../../components/button";
import Contact from "../../img/message.svg";
import DonateIcon from "../../img/money.svg";
import "./index.css";

export default class Donate extends React.Component{
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
            <div className="page">
                <Header back={0} theme={this.props.theme} headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <p className='title' style={this.state.mainColor}>The game is on!</p>
                <p className='subTitle' style={this.state.secondColor}>Hope you enjoyed using the app. Donating helps keep the project online.</p>
                <img className="giffty3d" alt="Giffty 3D" src={Giffty3D}/>
                <Link to=""><Button value="Contact me" image={Contact} alt="Next icon"/></Link>
                <Link to=""><Button value="Donate" image={DonateIcon} alt="Next icon"/></Link>
            </div>
        );
    }
}