import React from "react";
import './index.css';

export default class TextField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: "", mainColor: {color: "#222222"}};
        this.writeDown = this.writeDown.bind(this);
        this.validDigit = this.validDigit.bind(this);
        this.inFormat = this.inFormat.bind(this);
        this.outFormat = this.outFormat.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}});
        }
    }
    
    inFormat(){
        switch(this.props.format){
            case "currency":
                if(this.state.value !== ""){
                    let result = "";
                    for(let x = 3; x <= this.state.value.toString().length; x++){
                        if(this.validDigit(this.state.value[this.state.value.toString().length - x], "num")){
                            
                            result += this.state.value[this.state.value.toString().length - x].toString();
                        }
                    }
                    this.setState({value: result.split("").reverse().join("")});
                }
            break;
            default:
            break;
        }
    }

    outFormat(){
        switch(this.props.format){
            case "currency":
                this.setState({value: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(this.state.value)});
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
                allowedKeys = ["a", "ã", "á", "à", "â", "b", "c", "d", "e", "é", "è", "ê", "f", "g", "h", "i", "í", "ì", "î", "j", "k", "l", "m", "n", "o", "ó", "ò", "õ", "ô", "p", "q", "r", "s", "t", "u", "ú", "ù", "û", "v", "w", "x", "y", "z"];
                if(allowedKeys.includes(e)){
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
                <input style={this.state.mainColor} onFocus={this.inFormat} onBlur={this.outFormat} onChange={this.writeDown} placeholder={this.props.placeholder} value={this.state.value}/>
            </div>
        );
    }
}
