import React from "react";
import './index.css';

export default function SquareButton (props){
    const [style, setStyle] = React.useState();

    React.useEffect(() => {
        //decide if it's going to be functional or not
        if(props.button === true || props.button === undefined){
            setStyle({opacity: "1"});
        }
        else{
            setStyle({opacity: "0.5"});
        }
    }, [props.button])
        
    return(
        <button style={style} className="squareButton"/>
    );
}