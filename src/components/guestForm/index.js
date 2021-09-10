import React from "react";
import TextField from "../../components/textField";
import SquareButton from "../../components/squareButton";
import { GetPrice } from "../../script";
import "./index.css";

export default function GuestForm (props){
    const [stateButton, setStateButton] = React.useState(false);
    const [stateField, setStateField] = React.useState(() => {
        if(props.name !== undefined){
            return [props.name, props.giftSuggestion, props.giftPrice];
        }
        else{
            return ["", "", "0"];
        }
    });

    React.useEffect(() => {
        let verify = 1;
        if(stateField[0] === ""){
            verify = 0;
        }

        if(GetPrice() !== "0"){
            if(parseInt(stateField[2]) > parseInt(GetPrice())){
                verify = 0;
            }
        }

        if(verify === 1){
            setStateButton(true);
        }
        else{
            setStateButton(false);
        }
    }, [stateField])

    function sendFuction(state){
        if(props.to === "add"){
            props.function(state[0], state[1], state[2]);
        }
        else{
            props.function(props.id, state[0], state[1], state[2]);
        }
    }

    function saveField(field, name){
        switch(name){
            case "name":
                setStateField((state) => ([field, state[1], state[2]]));
            break;
            case "giftSuggestion":
                setStateField((state) => ([state[0], field, state[2]]));
            break;
            case "giftPrice":
                setStateField((state) => ([state[0], state[1], field]));
            break;
        }
    }

    return(
        <div className="formHolder">
            <TextField type="char" value={stateField[0]} name="name" function={saveField} theme={props.theme} placeholder="Name"/>
            <TextField value={stateField[1]} name="giftSuggestion" function={saveField} theme={props.theme} placeholder="Gift suggestion"/>
            <div>
                <TextField type="num" value={stateField[2]} name="giftPrice" function={saveField} format="currency" theme={props.theme} placeholder="Gift price"/>
                <a onClick={() => (stateButton) ? sendFuction(stateField) : false}><SquareButton button={stateButton}/></a>
            </div>
        </div>
    );
}