import React from "react";
import './index.css';

export default function Instruction (props){
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
        <div className="instruction">
            <span style={secondColor}>{props.number}</span>
            <span style={mainColor}>{props.text}</span>
        </div>
    );
}
