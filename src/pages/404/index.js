import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import IMG404 from "../../img/404.png";
import Button from "../../components/button";
import HomeIcon from "../../img/home.svg";
import "./index.css";

export default function Page404 (props){
    const [mainColor, setMainColor] = React.useState({color: ""});
    const [secondColor, setSecondColor] = React.useState({color: ""});

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

    return(
        <div className="page">
            <div>
                <Header theme={props.theme} headerFunction={props.headerFunction}/>
                <p className='title' style={mainColor}>Page not found.</p>
            </div>
            <img className="IMG404" alt="Giffty 3D" src={IMG404}/>
            <Link to="/"><Button value="Home page" image={HomeIcon} alt="Home icon"/></Link>
        </div>
    );
}
