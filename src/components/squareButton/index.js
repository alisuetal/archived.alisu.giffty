import React from "react";
import './index.css';

export default function SquareButton (props){
    const [button, setButton] = React.useState();

    React.useEffect(() => {
        //decide if it's going to be functional or not
        if(props.button === true || props.button === undefined){
            setButton(<button style={{opacity: "1"}} className="squareButton" onClick={() => props.function()}/>);
        }
        else{
            setButton(<button style={{opacity: "0.5"}} className="squareButton"/>);
        }
    }, [props.button])
        
    return(
        <>{button}</>
    );
}