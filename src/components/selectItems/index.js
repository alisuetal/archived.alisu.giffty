import React from "react";
import DownBlack from "../../img/downBlack.svg";
import DownWhite from "../../img/downWhite.svg";
import './index.css';

export default function SelectItems (props){
    const [style, setStyle] = React.useState({color: "#222222", backgroundImage: "url(" + DownBlack + ")"});
    const [selected, setSelected] = React.useState("-1");

    React.useEffect(() => {
        if(props.theme === true){
            setStyle({color: "#ffffff", backgroundImage: "url(" + DownWhite + ")"});
        }
        else{
            setStyle({color: "#222222", backgroundImage: "url(" + DownBlack + ")"});
        }
    }, [props.theme]);

    React.useEffect(() => {
        if(props.value !== undefined){
            setSelected(props.value);
        }
    }, [props.value]);

    
    function changeSelect(e){
        props.function(e);
        setSelected(e);
    }

    return(
        <select style={style} onChange={(e) => changeSelect(e.target.value)} value={selected}>
            {props.content.map((x) => (<option key={x[1] + props.select} value={x[1]}>{x[0]}</option>))}
        </select>
    );
}
