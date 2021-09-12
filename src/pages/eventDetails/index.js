import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import TextField from "../../components/textField";
import { SetPrice , GetPrice } from "../../script";
import "./index.css";

export default function EventDetails (props){
    const [mainColor, setMainColor] = React.useState({color: ""});
    const [fieldValue, setFieldValue] = React.useState("0");

    React.useEffect(() => {
        if(props.theme === true){
            setMainColor({color: "#ffffff"});
        }
        else{
            setMainColor({color: "#222222"});
        }
    }, [props.theme]);

    return(
        <div className="page">
            <Header step={1} theme={props.theme} link="/" headerFunction={props.headerFunction}/>
            <p className='title' style={mainColor}>Let's set the budget first.</p>
            <span style={{height: "36vh"}}/>
            <TextField value={GetPrice()} type="num" function={setFieldValue} theme={props.theme} format="currency" placeholder="Gift price (optional)"/>
            <Link to="/guests" onClick={() => SetPrice(fieldValue)}><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
        </div>
    );
}
