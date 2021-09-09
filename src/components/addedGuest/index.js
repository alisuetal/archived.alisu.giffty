import React from "react";
import DeleteBlack from "../../img/deleteBlack.svg";
import DeleteWhite from "../../img/deleteWhite.svg";
import EditBlack from "../../img/editBlack.svg";
import EditWhite from "../../img/editWhite.svg";
import "./index.css";

export default function AddedGuest (props){
    const[style, setStyle] = React.useState({"delete": DeleteBlack, "edit": EditBlack, "color": {color: "#222222"}});

    React.useEffect(() => {
        if(props.theme === true){
            setStyle({"delete": DeleteWhite, "edit": EditWhite, "color": {color: "#ffffff"}});
        }
    }, [])

    return(
        <button className="addedGuest">
            <span style={style["color"]}>{props.guestName}</span>
            <div align="right">
                <img src={style["delete"]} onClick={() => props.delete(props.id)} alt="Delete"/>
                <img src={style["edit"]} onClick={() => props.edit(props.id)} alt="Edit"/>
            </div>
        </button>
    );
}