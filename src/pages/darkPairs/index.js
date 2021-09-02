import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import DarkPair from "../../components/darkPair";
import AddItem from "../../components/addItem";
import InfoBlack from "../../img/infoBlack.svg";
import InfoWhite from "../../img/infoWhite.svg";
import "./index.css";

export default class DarkPairs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {mainColor: {color: "#222222"}, icon: InfoBlack};
        this.infoDarkPair = this.infoDarkPair.bind(this);
        this.addDarkPair = this.addDarkPair.bind(this);
        this.editDarkPair = this.editDarkPair.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}, icon: InfoWhite});
        }
        else{
            this.setState({mainColor: {color: "#222222"}, icon: InfoBlack});
        }
    }

    infoDarkPair(){
        let content = 
        <div>
            <p style={this.state.mainColor} className="title">We understand that not everybody can be friends.</p>
            <p style={this.state.mainColor} className="title">That’s why you can set Dark Pairs, preventing people that don’t get along too well to pick each other.</p>
        </div>;
        this.props.bottomPanel.openPanel(content);
    }

    editDarkPair(){
        
    }

    addDarkPair(){
        
    }
    
    render(){
        return(
            <div className="page">
                <Header back={1} step={3} theme={this.props.theme} link="/guests" headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <p className='title' style={this.state.mainColor}>
                    Would you like to set any dark pairs?
                    <img alt="Information icon" src={this.state.icon} onClick={this.infoDarkPair}/>
                </p>
                <div className="guestList">
                    <DarkPair theme={this.props.theme} function={this.editDarkPair} nameOne="Guest" nameTwo="Guest"/>
                    <AddItem function={this.addDarkPair} text="Add Dark Pair"/>
                </div>
                <Link to="/game-begin"><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
            </div>
        );
    }
}
