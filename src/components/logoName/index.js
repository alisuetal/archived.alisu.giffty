import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.svg";
import './index.css';

export default class LogoName extends React.Component{
    render(){
        return(
            <Link to="/">
                <img className="logo" alt="Giffty logo" src={Logo}/>
                <span className="logoName">Giffty</span>
            </Link>
        );
    }
}