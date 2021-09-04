import React from "react";
import TextField from "../../components/textField";
import SquareButton from "../../components/squareButton";
import "./index.css";
import { GetPrice } from "../../script";

export default class GuestForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {button: 0, buttonStyle: {opacity: 0.4}};
        this.buttonState = this.buttonState.bind(this);
        this.sendFuction = this.sendFuction.bind(this);
    }

    sendFuction(){
        if(this.state.button){
            if(this.props.to === "add"){
                this.props.function(this.nameField, this.giftField, this.priceField);
            }
            else{
                this.props.function(this.nameField, this.giftField, this.priceField, this.props.id);
            }
        }
    }

    buttonState(){
        if(this.nameField !== null && this.priceField !== null){
            let verify = 1;
            if(this.nameField.state.value === ""){
                verify = 0;
            }

            if(GetPrice() !== "0"){
                if(this.priceField.state.isTyping){
                    if(parseInt(this.priceField.state.value) > parseInt(GetPrice())){
                        console.log(parseInt(this.priceField.state.value));
                        verify = 0;
                    }
                }
                else{
                    if(parseInt(this.priceField.inFormat("currency")) > parseInt(GetPrice())){
                        verify = 0;
                    }
                }
            }

            if(verify === 1 && this.state.button !== 1){
                this.setState({button: 1, buttonStyle: {opacity: 1}});
            }
            else if(this.state.button !== 0 && verify === 0){
                this.setState({button: 0, buttonStyle: {opacity: 0.5}});
            }
        }
    }

    render(){
        return(
            <div className="formHolder">
                <TextField type="char" value={this.props.name} function={this.buttonState} ref={(child) => this.nameField = child} theme={this.props.theme} placeholder="Name"/>
                <TextField type="char" value={this.props.giftSuggestion} function={this.buttonState} ref={(child) => this.giftField = child} theme={this.props.theme} placeholder="Gift suggestion"/>
                <div>
                    <TextField type="num" value={this.props.giftPrice} function={this.buttonState} format="currency" ref={(child) => this.priceField = child} theme={this.props.theme} placeholder="Gift price"/>
                    <SquareButton style={this.state.buttonStyle} function={this.sendFuction} submit={this.state.button}/>
                </div>
            </div>
        );
    }
}