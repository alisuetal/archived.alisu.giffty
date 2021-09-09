import React from "react";
import { Link } from "react-router-dom";
import LogoName from "../logoName";
import LeftArrow from "../../img/back.svg";
import StepGrey from "../../img/stepGrey.svg";
import StepPurple from "../../img/stepPurple.svg";
import SettingsBlack from "../../img/settingsBlack.svg";
import SettingsWhite from "../../img/settingsWhite.svg";
import "./index.css";

export default function Header (props){
    const [headerState, setHeaderState] = React.useState({"back": false, "img": []});
    const [icon, setIcon] = React.useState(SettingsBlack);

    React.useEffect(() => {
        if(props.theme === true){
            setIcon(SettingsWhite);
        }
        else{
            setIcon(SettingsBlack);
        }
    }, [props.theme]);

    React.useEffect(() => {
        //building the step images according to the actual step (1, 2, 3)
        if(props.step > 0){
            setHeaderState((state) => ({
                ...state,
                "back": <Link to={props.link}><img src={LeftArrow} className="goBack" alt="Go back button" align="left"/></Link>
            }));

            var img = [];
            for(let x = 1; x <= 3; x++){
                if(x === props.step){
                    img[x] = <img alt="Step status" src={StepPurple}/>;
                }
                else{
                    img[x] = <img alt="Step status" src={StepGrey}/>;
                }
            }

            setHeaderState((state) => ({...state, "img": <div className="headerSteps">{img[1]}{img[2]}{img[3]}</div>}));
        }
    }, [props.step]);

    return(
        <div>
            <div className="header">
                {headerState["back"]}
                <LogoName/>
                <img src={icon} className="settingsIcon" onClick={() => props.headerFunction()} alt="Settings button" align="right"/>
            </div>
            {headerState["img"]}
        </div>
    );
}