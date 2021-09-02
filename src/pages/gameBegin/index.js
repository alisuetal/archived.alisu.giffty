import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import Instruction from "../../components/instruction";
import "./index.css";

export default class GameBegin extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainColor: {color: "#222222"}};
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}});
        }
    }

    render(){
        let stepTwo = <div><div style={{color: "#8542c8", display: "inline-block"}}>Press and hold</div> the reveal button to show your pair.</div>;
        return(
            <div className="page">
                <Header back={0} theme={this.props.theme} headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <p className='title' style={this.state.mainColor}>The game is on!</p>
                <Instruction theme={this.props.theme} number={1} text="Pass the device to the one whom name shows on the screen."/>
                <Instruction theme={this.props.theme} number={2} text={stepTwo}/>
                <Instruction theme={this.props.theme} number={3} text="Repeat step 01."/>
                <Link to="/reveal"><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
            </div>
        );
    }
}