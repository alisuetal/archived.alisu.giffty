import React from "react";
import PressNHold from "../../img/pressAndHold.svg";
import Ellipse from "../../img/ellipse.svg";
import './index.css';

export default class RevealButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            background: {transition: "0.5s", backgroundSize: "0px", backgroundImage: Ellipse},
            button: {backgroundColor: "#8542c8", backgroundImage: PressNHold},
            information: {opacity: 0},
            timeout: false, guestTwo: "...", mainColor: {color: "#222222"}};
        this.startAnimation = this.startAnimation.bind(this);
        this.stopAnimation = this.stopAnimation.bind(this);
        this.revealDetail = this.revealDetail.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}});
        }
    }

    revealDetail(){
        this.setState({background: {transition: "2.2s", backgroundSize: "140%", background: Ellipse}});
        setTimeout(() => {
            this.setState({background: {transition: "2.2s", backgroundSize: "140%", background: "none"}});
            this.setState({button: {backgroundColor: "transparent", backgroundImage: "none", cursor: "default"}});
            this.setState({information: {opacity: 1}});
            this.setState({guestTwo: this.props.guestTwo})
        }, 10);
    }

    startAnimation(){
        if(this.state.button.backgroundColor !== "transparent"){
            this.setState({background: {transition: "2.2s", backgroundSize: "140%"}});
            this.setState({timeout: setTimeout(() => {
                this.revealDetail();
                this.setState({timeout: clearTimeout(this.state.timeout)});
            }, 2000)});
        }
    }
    
    stopAnimation(){
        this.setState({background: {transition: "0.5s", backgroundSize: "0vh"}});
        this.setState({timeout: clearTimeout(this.state.timeout)});
    }

    render(){
        return(
            <div>
                <p className="title" style={this.state.mainColor}><span>{this.props.guestOne}</span> got <span>{this.state.guestTwo}</span></p>
                <div className="revealButton" style={this.state.button} onTouchStartCapture={this.startAnimation} onMouseDownCapture={this.startAnimation} onMouseUpCapture={this.stopAnimation} onTouchEndCapture={this.stopAnimation}>
                    <div className="buttonBackground" style={this.state.background}>
                        <div className="guestInfo" style={this.state.information}>
                            <p className="title" style={this.state.mainColor}>Gift suggestion</p>
                            <button style={this.state.mainColor}>{this.props.giftSuggestion}</button>
                            <p className="title" style={this.state.mainColor}>Gift price (approx.)</p>
                            <button style={this.state.mainColor}>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(this.props.giftPrice)}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}