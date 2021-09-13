import React from "react";
import './index.css';

export default function TextField (props){
    const [mainColor, setMainColor] = React.useState();
    const [value, setValue] = React.useState(() => {
        if(props.value !== undefined){
            if(props.type === "num"){
                return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(props.value);
            }
            else{
                return props.value;
            }
        }
        else{
            if(props.type === "num"){
                return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(0);
            }
            else{
                return "";
            }
        }
    });

    React.useEffect(() => {
        if(props.theme === true){
            setMainColor({color: "#ffffff"});
        }
        else{
            setMainColor({color: "#222222"});
        }
    }, [props.theme]);
    
    function sendStatus(value, name){
        if(props.function){
            props.function(value, name);
        }
    }

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
            default:
                return value;
        }
    }

    function writeDown(e, type){
        //pegar o dígito que mudou
        if((e.toString().length - 1) === -1){
            if(props.type === "num"){ //se for "", define para 0 em caso de números
                setValue("0");
                sendStatus("0", props.name);
            }
            else{
                setValue(""); //se for char type, define ""
                sendStatus("", props.name);
            }
        }
        else{
            let temp = [];
            for(let x = 0; x < e.length; x++){
                if(validDigit(e[x], type)){ //se o digito não for "", precisa ser validado
                    temp.push(e[x]);
                }
            }

            let x = "0", y = 0;
            while(temp[y] === "0"){
                temp.splice(x, 1);
            }
            temp = temp.join("");
            setValue(temp);
            sendStatus(temp, props.name);
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
                result = true;
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
