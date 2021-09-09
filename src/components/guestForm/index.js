import React from "react";
import TextField from "../../components/textField";
import SquareButton from "../../components/squareButton";
import { GetPrice } from "../../script";
import "./index.css";

export default function GuestForm (props){
    const [stateButton, setStateButton] = React.useState({"button": 0});
    const [stateField, setStateField] = React.useState({"fieldOne": "", "fieldTwo": "", "fieldThree": ""});

    React.useEffect(() => {
        setStateField({"fieldOne": props.name, "fieldTwo": props.giftSuggestion, "fieldThree": props.giftPrice});
    }, [props.name, props.giftPrice, props.giftSuggestion]);

    React.useEffect(() => {
        let verify = 1;
        if(stateField["fieldOne"] === ""){
            verify = 0;
        }

        if(GetPrice() !== "0"){
            if(parseInt(stateField["fieldThree"]) > parseInt(GetPrice())){
                verify = 0;
            }
        }

        if(verify === 1){
            setStateButton({"button": 1});
        }
        else{
            setStateButton({"button": 1});
        }
    }, [stateField])

    function sendFuction(){
        if(props.to === "add"){
            props.function(stateField);
        }
        else{
            props.function(stateField, props.id);
        }
    }

    function saveField(field, name){
        switch(name){
            case "name":
                setStateField((state) => ({...state, "fieldOne": field}));
            break;
            case "giftSuggestion":
                setStateField((state) => ({...state, "fieldTwo": field}));
            break;
            case "giftPrice":
                setStateField((state) => ({...state, "fieldThree": field}));
            break;
        }
    }

    return(
        <div className="formHolder">
            <TextField type="char" value={stateField["name"]} name="name" function={saveField} theme={this.props.theme} placeholder="Name"/>
            <TextField type="char" value={stateField["giftSuggestion"]} name="giftSuggestion" function={saveField} theme={this.props.theme} placeholder="Gift suggestion"/>
            <div>
                <TextField type="num" value={stateField["giftPrice"]} name="giftPrice" function={saveField} format="currency" theme={this.props.theme}placeholder="Gift price"/>
                <SquareButton function={sendFuction()} button={stateButton["button"]}/>
            </div>
        </div>
    );
}