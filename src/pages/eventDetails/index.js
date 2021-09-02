import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import TextField from "../../components/textField";
import "./index.css";

export default class EventDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainColor: {color: "#222222"}};
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}});
        }
    }

    render(){
        return(
            <div className="page">
                <Header back={1} step={1} theme={this.props.theme} link="/" headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <p className='title' style={this.state.mainColor}>Let's set the budget first.</p>
                <span style={{height: "36vh"}}/>
                <TextField type="num" theme={this.props.theme} format="currency" placeholder="Gift price (optional)"/>
                <Link to="/guests"><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
            </div>
        );
    }
}
