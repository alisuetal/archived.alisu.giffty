import React from "react";
import { GetGuestList } from "../../script";
import SelectItems from "../selectItems";
import SquareButton from "../squareButton";

export default class DarkPairForm extends React.Component{
    constructor(props) {
        super(props);
        this.baseState = [["Select guest", -1], ...GetGuestList().map((x, y) => ([x[0], y]))];
        this.state = {selectOne: this.baseState, selectTwo: this.baseState, selectedOne: "", selectedTwo: ""};
        this.removeDuplicate = this.removeDuplicate.bind(this);
        this.sendFunction = this.sendFunction.bind(this);
    }

    sendFunction(){
        this.props.function(this.state.selectedOne, this.state.selectedTwo);
    }

    removeDuplicate(...x){
        if(x[1] !== undefined){
            //format the array
            let array = [...GetGuestList().map((x, y) => ([x[0], y]))];
            if(x[1] !== "-1"){
                array.splice(parseInt(x[1]), 1);
            }
            array = [["Select guest", -1], ...array];
            
            //decide which select will get it
            if(x[0].props.select === "one"){
                this.setState({selectTwo: [...array], selectedOne: x[1].toString()});
            }
            else{
                this.setState({selectOne: [...array], selectedTwo: x[1].toString()});
            }
        }
    }

    render(){
        return(
            <>
                <SelectItems value={this.props.valueOne} content={this.state.selectOne} function={this.removeDuplicate} select={"one"} theme={this.props.theme}/>
                <SelectItems value={this.props.valueTwo} content={this.state.selectTwo} function={this.removeDuplicate} select={"two"} theme={this.props.theme}/>
                <SquareButton button={(this.state.selectOne.length !== this.baseState.length && this.state.selectTwo.length !== this.baseState.length)} function={this.sendFunction}/>
            </>
        );
    }
}
