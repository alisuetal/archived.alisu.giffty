import React from "react";
import './index.css';

export default function Instruction (props){
    const [theme, setTheme] = React.useState({mainColor: "", secondColor: ""});

    React.useEffect(() => {
        if(props.theme === 1){
            setTheme({mainColor: {color: "#ffffff"}, secondColor: {color: "#aaaaaa"}});
        }
        else{
            setTheme({mainColor: {color: "#222222"}, secondColor: {color: "#888888"}});
        }
    }, [props.theme]);

    return(
        <div className="instruction">
            <span style={theme["secondColor"]}>{props.number}</span>
            <span style={theme["mainColor"]}>{props.text}</span>
        </div>
    );
}
