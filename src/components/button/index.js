import React from "react";
import './index.css';

export default function Button (props){
    const [buttonClass, setButtonClass] = React.useState();

    React.useEffect(() => {
        if(props.button === true || props.button === undefined){
            setButtonClass("bottomButton");

        }
        else if(props.button === false){
            setButtonClass("bottomButton disabled");
        }
    }, [props.button]);

    return(
        <button className={buttonClass}>
            {props.value}
            <img src={props.image} alt="Action icon" align="right"/>
        </button>
    );
}