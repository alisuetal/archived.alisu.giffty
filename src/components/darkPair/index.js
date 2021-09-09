import React from "react";
import DeleteBlack from "../../img/deleteBlack.svg";
import DeleteWhite from "../../img/deleteWhite.svg";
import EditBlack from "../../img/editBlack.svg";
import EditWhite from "../../img/editWhite.svg";
import "./index.css";

export default function DarkPair (props){
    const [style, setStyle] = React.useState();

    React.useEffect(() => {
        if(props.theme === 1){
            setStyle({"delete": DeleteWhite, "edit": EditWhite, "color": {color: "#ffffff"}});
        }
        else{
            setStyle({"delete": DeleteBlack, "edit": EditBlack, "color": {color: "#222222"}});
        }
    }, [props.theme]);

    return(
        <button className='darkPair'>
            <div>
                <span style={style["color"]}>{props.nameOne}</span>
                <img src={style["edit"]} onClick={() => props.edit(props.pairIndex)} alt="Edit" align='right'/>
            </div>
            <div>
                <span style={style["color"]}>{props.nameTwo}</span>
                <img src={style["delete"]} onClick={() => props.delete(props.pairIndex)} alt="Delete" align='right'/>
            </div>
        </button>
    );
}