import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import Instruction from "../../components/instruction";
import "./index.css";
import { SetPairs } from "../../script";

export default function GameBegin (props){
    const [mainColor, setMainColor] = React.useState({color: ""});

    React.useEffect(() => {
        if(props.theme === true){
            setMainColor({color: "#ffffff"});
        }
        else{
            setMainColor({color: "#222222"});
        }
    }, [props.theme]);

    let stepTwo = <div><div style={{color: "#8542c8", display: "inline-block"}}>Press and hold</div> the reveal button to show your pair.</div>;
    return(
        <div className="page">
            <Header step={0} theme={props.theme} headerFunction={props.headerFunction}/>
            <p className='title' style={mainColor}>The game is on!</p>
            <Instruction theme={props.theme} number={1} text="Pass the device to the one whom name shows on the screen."/>
            <Instruction theme={props.theme} number={2} text={stepTwo}/>
            <Instruction theme={props.theme} number={3} text="Repeat step 01."/>
            <Link to="/reveal" onClick={() => SetPairs()}><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
        </div>
    );
}