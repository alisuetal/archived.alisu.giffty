import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Giffty3D from "../../img/giffty3d.svg";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import "./index.css";

export default class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {mainColor: {color: "#222222"}, secondColor: {color: "#888888"}};
        this.howTo = this.howTo.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}, secondColor: {color: "#aaaaaa"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}, secondColor: {color: "#888888"}});
        }
    }

    howTo(){
        let content = 
        <div>
            <p style={this.state.mainColor}>1. Set the occasion name and gift price limit (if there's one).</p>
            <p style={this.state.mainColor}>2. Set the guests.</p>
            <p style={this.state.mainColor}>3. Set Dark Pairs (optional).</p>
            <p style={this.state.mainColor}>4. See the results.</p>
        </div>;
        this.props.bottomPanel.openPanel(content);
    }

    render(){
        return(
            <div className="page">
                <Header back={0} theme={this.props.theme} headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <p className='title' style={this.state.mainColor}>Need an app to help you host a Secret Santa?</p>
                <p className='subTitle' style={this.state.secondColor}>Enter the names, gift suggestions, and more for free!</p>
                <img className="giffty3d" alt="Giffty 3D" src={Giffty3D}/>
                <Link to="/event-details"><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
                <p className="bottomLink" onClick={this.howTo}>How to use</p>
            </div>
        );
    }
}
