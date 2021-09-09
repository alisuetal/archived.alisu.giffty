import React from "react";
import './index.css';

export default function TextField (props){
    const [mainColor, setMainColor] = React.useState();
    const [value, setValue] = React.useState("");

    React.useEffect(() => {
        if(props.theme === 1){
            setMainColor({color: "#ffffff"});
        }
        else{
            setMainColor({color: "#222222"});
        }
    }, [props.theme]);

    React.useEffect(() => {
        if(props.value !== undefined){
            if(props.type === "num"){
                setValue(new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(props.value));
            }
            else{
                setValue(props.value);
            }
        }
        else{
            if(props.type === "num"){
                setValue(new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(0));
            }
        }
    }, [props.value]);
    
    function inFormat(x){
        switch(x){
            case "currency":
                if(value !== ""){
                    let result = "";
                    for(let x = 3; x <= value.toString().length; x++){
                        if(validDigit(value[value.toString().length - x], "num")){
                            result += value[value.toString().length - x].toString();
                        }
                    }
                    return result.split("").reverse().join("");
                }
            break;
            default:
                return value;
            break;
        }
    }

    function outFormat(){
        switch(props.format){
            case "currency":
                if(value !== ""){
                    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(value);
                }
                else{
                    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(0);
                }
            break;
            default:
                return value;
            break;
        }
    }

    function writeDown(e, type){
        //pegar o dígito que mudou
        let digit;
        if((e.toString().length - 1) === -1){
            setValue("");
        }
        else{
            digit = e[e.toString().length - 1];
        }

        //validar
        if(validDigit(digit, type)){
            setValue(e);
        }
    }

    function validDigit(e, type){
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

    return(
        <div className="inputHolder">
            <input style={mainColor} onChange={(e) => writeDown(e.target.value, props.type)} onFocus={() => setValue(inFormat(props.format))} onBlur={() => setValue(outFormat())} placeholder={props.placeholder} value={value}/>
        </div>
    );
}
