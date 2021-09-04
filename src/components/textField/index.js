import React from "react";
import './index.css';

export default class TextField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: "", mainColor: {color: "#222222"}, isTyping: 0};
        this.writeDown = this.writeDown.bind(this);
        this.validDigit = this.validDigit.bind(this);
        this.inFormat = this.inFormat.bind(this);
        this.outFormat = this.outFormat.bind(this);
        this.isTyping = this.isTyping.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}});
        }

        if(this.props.value !== undefined){
            if(this.props.type === "num"){
                this.setState({value: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(this.props.value)});
            }
            else{
                this.setState({value: this.props.value});
            }
        }
        else{
            if(this.props.type === "num"){
                this.setState({value: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(0)});
            }
        }
    }

    isTyping(x){
        if(x === 1){
            if(this.props.format !== undefined){
                this.setState({value: this.inFormat(this.props.format)});
            }
            if(this.state.isTyping !== 1){
                this.setState({isTyping: 1});
            }
        }
        else if(x === 0){
            if(this.state.isTyping !== 0 ){
                this.setState({isTyping: 0});
            }
            this.outFormat();
        }
    }
    
    inFormat(x){
        switch(x){
            case "currency":
                if(this.state.value !== ""){
                    let result = "";
                    for(let x = 3; x <= this.state.value.toString().length; x++){
                        if(this.validDigit(this.state.value[this.state.value.toString().length - x], "num")){
                            result += this.state.value[this.state.value.toString().length - x].toString();
                        }
                    }
                    return result.split("").reverse().join("");
                }
            break;
            default:
            break;
        }
    }

    outFormat(){
        switch(this.props.format){
            case "currency":
                if(this.state.value !== ""){
                    this.setState({value: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(this.state.value)});
                }
                else{
                    this.setState({value: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(0)});
                }
            break;
            default:
            break;
        }
    }

    writeDown(e) {
        let digit;
        if((e.target.value.toString().length - 1) === -1){
            this.setState({value: ""});
        }
        else{
            digit = e.target.value[e.target.value.toString().length - 1];
        }
        if(this.validDigit(digit, this.props.type)){
            this.setState({value: e.target.value});
        }
    }

    validDigit(e, type){
        let result, allowedKeys;
        switch(type){
            case "num":
                allowedKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                if(allowedKeys.includes(parseInt(e))){
                    result = true;
                }
                else{
                    result = false;
                }
            break;
            case "char":
                //allowedKeys = ["a", "ã", "á", "à", "â", "b", "c", "d", "e", "é", "è", "ê", "f", "g", "h", "i", "í", "ì", "î", "j", "k", "l", "m", "n", "o", "ó", "ò", "õ", "ô", "p", "q", "r", "s", "t", "u", "ú", "ù", "û", "v", "w", "x", "y", "z", " "];
                if((/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/).test(e) || e === " "){
                    result = true;
                }
                else{
                    result = false;
                }
            break;
            default:
                result = false;
            break;
        }
        return result;
    }

    render(){
        return(
            <div className="inputHolder">
                <input style={this.state.mainColor} onKeyUp={this.props.function} onFocus={() => this.isTyping(1)} onBlur={() => this.isTyping(0)} onChange={this.writeDown} placeholder={this.props.placeholder} value={this.state.value}/>
            </div>
        );
    }
}
