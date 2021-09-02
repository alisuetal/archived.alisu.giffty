import React from "react";
import { Link } from "react-router-dom";
import LogoName from "../logoName";
import LeftArrow from "../../img/back.svg";
import StepGrey from "../../img/stepGrey.svg";
import StepPurple from "../../img/stepPurple.svg";
import SettingsBlack from "../../img/settingsBlack.svg";
import SettingsWhite from "../../img/settingsWhite.svg";
import "./index.css";

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {icon: SettingsBlack};
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({icon: SettingsWhite});
        }
        else{
            this.setState({icon: SettingsBlack});
        }
    }

    render(){
        //defining wether there'll be a "go back" icon
        let back;
        if(this.props.back){
            back = <Link to={this.props.link}><img src={LeftArrow} className="goBack" alt="Go back button" align="left"/></Link>;
        }

        //building the step images according to the actual step (1, 2, 3)
        var img = [];
        if(this.props.step > 0){
            for(let x = 1; x <= 3; x++){
                if(x === this.props.step){
                    img[x] = <img alt="Step status" src={StepPurple}/>;
                }
                else{
                    img[x] = <img alt="Step status" src={StepGrey}/>;
                }
            }
            img[0] = <div className="headerSteps">{img[1]}{img[2]}{img[3]}</div>
        }

        return(
            <div>
                <div className="header">
                    {back}
                    <LogoName/>
                    <img src={this.state.icon} className="settingsIcon" onClick={this.props.headerFunction} alt="Settings button" align="right"/>
                </div>
                {img[0]}
            </div>
        );
    }
}