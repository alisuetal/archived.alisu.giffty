import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import AddedGuest from "../../components/addedGuest";
import AddItem from "../../components/addItem";
import "./index.css";

export default class Guests extends React.Component{
    constructor(props) {
        super(props);
        this.state = {mainColor: {color: "#222222"}};
        this.addItem = this.addItem.bind(this);
        this.edit = this.edit.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}});
        }
    }
    
    edit(){
        
    }

    addItem(){

    }

    render(){
        return(
            <div className="page">
                <Header back={1} step={2} theme={this.props.theme} link="/event-details" headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <p className='title' style={this.state.mainColor}>Set the guests.</p>
                <div className="guestList">
                    <AddedGuest theme={this.props.theme} function={this.edit} name="Guest" id={1}/>
                    <AddItem function={this.addItem} text="Add guest"/>
                </div>
                <Link to="/dark-pairs"><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
            </div>
        );
    }
}
