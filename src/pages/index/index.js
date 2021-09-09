import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Giffty3D from "../../img/giffty3d.svg";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import BottomPanel from "../../components/bottomPanel";
import "./index.css";

export default function Index (props){
    const [mainColor, setMainColor] = React.useState({color: ""});
    const [secondColor, setSecondColor] = React.useState({color: ""});
    const [panelContent, setPanelContent] = React.useState(false);

    React.useEffect(() => {
        if(props.theme === true){
            setMainColor({color: "#ffffff"});
            setSecondColor({color: "#aaaaaa"});
        }
        else{
            setMainColor({color: "#222222"});
            setSecondColor({color: "#888888"});
        }
    }, [props.theme]);

    function howTo(){
        setPanelContent(
            <div>
                <p style={mainColor}>1. Set the occasion name and gift price limit (if there's one).</p>
                <p style={mainColor}>2. Set the guests.</p>
                <p style={mainColor}>3. Set Dark Pairs (optional).</p>
                <p style={mainColor}>4. See the results.</p>
            </div>
        );
    }

    return(
        <div className="page">
            {(panelContent) ? <BottomPanel theme={props.theme} closePanel={() => setPanelContent(false)} content={panelContent}/> : false}
            <Header theme={props.theme} headerFunction={props.headerFunction}/>
            <p className='title' style={mainColor}>Need an app to help you host a Secret Santa?</p>
            <p className='subTitle' style={secondColor}>Enter the names, gift suggestions, and more for free!</p>
            <img className="giffty3d" alt="Giffty 3D" src={Giffty3D}/>
            <Link to="/event-details"><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
            <p className="bottomLink" onClick={() => howTo()}>How to use</p>
        </div>
    );
}
