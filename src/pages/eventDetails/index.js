import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import TextField from "../../components/textField";
import { SetPrice , GetPrice } from "../../script";
import "./index.css";

export default class EventDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {mainColor: {color: "#222222"}};
        this.setPrice = this.setPrice.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}});
        }
    }

    setPrice(){
        SetPrice(this.textField.inFormat("currency"));
    }

    render(){
        return(
            <div className="page">
                <Header back={1} step={1} theme={this.props.theme} link="/" headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <p className='title' style={this.state.mainColor}>Let's set the budget first.</p>
                <span style={{height: "36vh"}}/>
                <TextField value={GetPrice()} type="num" ref={(child) => this.textField = child} theme={this.props.theme} format="currency" placeholder="Gift price (optional)"/>
                <Link to="/guests" onClick={this.setPrice}><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
            </div>
        );
    }
}
