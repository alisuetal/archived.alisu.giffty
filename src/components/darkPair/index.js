import React from "react";
import DeleteBlack from "../../img/deleteBlack.svg";
import DeleteWhite from "../../img/deleteWhite.svg";
import EditBlack from "../../img/editBlack.svg";
import EditWhite from "../../img/editWhite.svg";
import "./index.css";

export default function DarkPair (props){
    const [icons, setIcons] = React.useState({"delete": "", "edit": ""});
    const [style, setStyle] = React.useState();

    React.useEffect(() => {
        if(props.theme === true){
            setIcons({"delete": DeleteWhite, "edit": EditWhite});
            setStyle({color: "#ffffff"});
        }
        else{
            setIcons({"delete": DeleteBlack, "edit": EditBlack});
            setStyle({color: "#222222"});
        }
    }, [props.theme]);

    return(
        <button className='darkPair'>
            <div>
                <span style={style}>{props.nameOne}</span>
                <img src={icons["edit"]} onClick={() => props.edit(props.pairIndex)} alt="Edit" align='right'/>
            </div>
            <div>
                <span style={style}>{props.nameTwo}</span>
                <img src={icons["delete"]} onClick={() => props.delete(props.pairIndex)} alt="Delete" align='right'/>
            </div>
        </button>
    );
}