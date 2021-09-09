import React from "react";
import './index.css';

export default function Button (props){
    const [style, setStyle] = React.useState();

    React.useEffect(() => {
        if(props.button === true || props.button === undefined){
            setStyle({backgroundColor: "#8542c8"});
        }
        else{
            setStyle({backgroundColor: "#a284c2"});
        }
    }, [props.button]);

    return(
        <button style={style} className="button">
            {props.value}
            <img src={props.image} alt="Action icon" align="right"/>
        </button>
    );
}