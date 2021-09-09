import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import DarkPair from "../../components/darkPair";
import AddItem from "../../components/addItem";
import InfoBlack from "../../img/infoBlack.svg";
import InfoWhite from "../../img/infoWhite.svg";
import { GetDarkPair, GetDarkPairs, EditDarkPair, DeleteDarkPair, SetDarkPair, GetGuestList, GetGuest } from "../../script";
import "./index.css";
import DarkPairForm from "../../components/darkPairForm";

export default class DarkPairs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {mainColor: {color: "#222222"}, icon: InfoBlack, button: 0, darkPairs: GetDarkPairs()};
        this.infoDarkPair = this.infoDarkPair.bind(this);
        this.getAddDarkPair = this.getAddDarkPair.bind(this);
        this.getEdit = this.getEdit.bind(this);
        this.submitDarkPair = this.submitDarkPair.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}, icon: InfoWhite});
        }
        else{
            this.setState({mainColor: {color: "#222222"}, icon: InfoBlack});
        }
    }

    infoDarkPair(){
        let content = 
        <div>
            <p style={this.state.mainColor} className="title">We understand that not everybody can be friends.</p>
            <p style={this.state.mainColor} className="title">That’s why you can set Dark Pairs, preventing people that don’t get along too well to pick each other.</p>
        </div>;
        this.props.bottomPanel.openPanel(content);
    }

    submitDelete(index){
        /*if(index !== null){
            DeleteGuest(index);
            if(GetGuestList().length !== 0){
                this.setState({guests: GetGuestList()});
            }
            else{
                this.setState({guests: GetGuestList()});
            }
            this.button.shouldClick((GetGuestList().length >= 3));
        }*/
    }

    submitEdit(...params){
        /*if(params[0].state.value !== "" && params[3] !== null){
            if(GetPrice() === "0"){                //EditGuest(params[3], params[0].state.value, params[1].state.value, params[2].inFormat("currency"));
            }
            else if(params[2] <= GetPrice()){
                //SetGuest(params[3], params[0].state.value, params[1].state.value, params[2].inFormat("currency"));
            }
        }
        this.setState({guests: GetGuestList()});
        this.props.bottomPanel.closePanel();*/
    }

    submitDarkPair(...params){
        if(params[0] !== undefined && params[1] !== undefined){
            if(GetGuestList().length * ((GetGuestList().length - 2) - (GetDarkPairs().length + 1)) !== 0){
                if(GetDarkPairs().length !== 0){
                    let array = GetDarkPairs(), verify = true;
                    for(let x = 0; x < array.length; x++){
                        if(array[x].includes(params[0]) && array[x].includes(params[1])){
                            verify = false;
                        }
                    }
                    if(verify){
                        SetDarkPair(params[0], params[1]);
                        this.setState({darkPairs: GetDarkPairs()});
                    }
                }
                else{
                    SetDarkPair(params[0], params[1]);
                    this.setState({darkPairs: GetDarkPairs()});
                }   
            }
        }
        this.props.bottomPanel.closePanel();
    }
    
    getEdit(x){
        let y = GetDarkPair(x);
        let content = <DarkPairForm valueOne={y[0]} valueTwo={y[1]} function={this.submitDarkPair} theme={this.props.theme}/>;
        this.props.bottomPanel.openPanel(content);
    }

    getAddDarkPair(){
        let content =
        <DarkPairForm function={this.submitDarkPair} theme={this.props.theme}/>
        this.props.bottomPanel.openPanel(content);
    }

    appendDarkPairs(){
        let array = [];
        if(this.state.darkPairs.length !== 0){
            array = this.state.darkPairs.map((x, y) => (<DarkPair theme={this.props.theme} edit={this.getEdit} pairIndex={y} delete={this.submitDelete} nameOne={GetGuest(x[0])[0]} nameTwo={GetGuest(x[1])[0]} key={y} id={y}/>));
        }
        return array;
    }
    
    render(){
        return(
            <div className="page">
                <Header back={1} step={3} theme={this.props.theme} link="/guests" headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <p className='title' style={this.state.mainColor}>
                    Would you like to set any dark pairs?
                    <img alt="Information icon" src={this.state.icon} onClick={this.infoDarkPair}/>
                </p>
                <div className="guestList">
                    {(this.state.darkPairs.length !== 0) ? this.appendDarkPairs().map((x) => (x)) : false}
                    <AddItem function={this.getAddDarkPair} text="Add Dark Pair"/>
                </div>
                <Link to="/game-begin"><Button value="Next" image={RightArrow} alt="Next icon"/></Link>
            </div>
        );
    }
}
