import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import RevealButton from "../../components/revealButton";
import "./index.css";

export default class Reveal extends React.Component{
    render(){
        return(
            <div className="page">
                <Header back={0} theme={this.props.theme} headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <RevealButton guestOne="Guest 1" guestTwo="Guest 2" giftSuggestion="Gift" giftPrice="300" theme={this.props.theme}/>
                <Link to="/donate"><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
            </div>
        );
    }
}