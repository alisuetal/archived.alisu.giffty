import React from "react";
import { GetGuestList } from "../../script";
import SelectItems from "../selectItems";
import SquareButton from "../squareButton";

export default function DarkPairForm (props){
    const [baseState, setBaseState] = React.useState([["Select guest", -1], ...GetGuestList().map((x, y) => ([x[0], y]))]);
    const [stateSelect, setStateSelect] = React.useState({"selectOne": this.baseState, "selectTwo": this.baseState, "selectedOne": "", "selectedTwo": ""});

    function removeDuplicate(...x){
        if(x[0] !== undefined){
            //format the array
            let array = [...GetGuestList().map((x, y) => ([x[0], y]))];
            if(x[0] !== "-1"){
                array.splice(parseInt(x[0]), 1);
            }
            array = [["Select guest", -1], ...array];
            
            //decide which select will get it
            if(x[1] === "one"){
                setStateSelect((state) => ({...state, "selectTwo": [...array], "selectedOne": x[0].toString()}));
            }
            else{
                setStateSelect((state) => ({...state, "selectOne": [...array], "selectedTwo": x[0].toString()}));
            }
        }
    }

    return(
        <>
            <SelectItems value={props.valueOne} content={stateSelect["selectOne"]} function={removeDuplicate} select={"one"} theme={props.theme}/>
            <SelectItems value={props.valueTwo} content={stateSelect["selectTwo"]} function={removeDuplicate} select={"two"} theme={props.theme}/>
            <SquareButton button={(stateSelect["selectOne"].length !== baseState.length && stateSelect["selectTwo"].length !== baseState.length)} function={() => props.function(stateSelect["selectOne"], stateSelect["selectTwo"])}/>
        </>
    );
}
