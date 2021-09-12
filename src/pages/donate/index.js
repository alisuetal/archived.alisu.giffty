import React from "react";
import Header from "../../components/header";
import Giffty3D from "../../img/giffty3d.svg";
import Button from "../../components/button";
import Contact from "../../img/message.svg";
//import DonateIcon from "../../img/money.svg";
import "./index.css";

export default function Donate (props){
    const [mainColor, setMainColor] = React.useState({color: ""});
    const [secondColor, setSecondColor] = React.useState({color: ""});

    React.useEffect(() => {
        if(props.theme === true){
            setMainColor({color: "#ffffff"});
            setSecondColor({color: "#aaaaaa"});
        }
        else{
            setMainColor({color: "#222222"});
            setSecondColor({color: "#888888"});
        }
    }, [props.theme]);

    return(
        <div className="page">
            <Header step={0} theme={props.theme} headerFunction={props.headerFunction}/>
            <p className='title' style={mainColor}>The game is on!</p>
            <p className='subTitle' style={secondColor}>Hope you enjoyed using the app. Donating helps keep the project online.</p>
            <img className="giffty3d" alt="Giffty 3D" src={Giffty3D}/>
            <a href="https://github.com/alisuetal"><Button value="Contact me" image={Contact} alt="Next icon"/></a>
            {/*<Link to=""><Button value="Donate" image={DonateIcon} alt="Next icon"/></Link>*/}
        </div>
    );
}