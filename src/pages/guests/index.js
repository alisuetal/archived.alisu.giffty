import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import AddedGuest from "../../components/addedGuest";
import AddItem from "../../components/addItem";
import GuestForm from "../../components/guestForm";
import { GetGuestList, GetGuest, EditGuest, SetGuest, GetPrice, DeleteGuest } from "../../script";
import "./index.css";

export default class Guests extends React.Component{
    constructor(props) {
        super(props);
        this.state = {mainColor: {color: "#222222"}, guests: GetGuestList(), form: 0, giftPrice: GetPrice(), button: (GetGuestList().length >= 3)};
        this.getAddGuest = this.getAddGuest.bind(this);
        this.getEdit = this.getEdit.bind(this);
        this.appendGuests = this.appendGuests.bind(this);
        this.submitGuest = this.submitGuest.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.submitDelete = this.submitDelete.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({mainColor: {color: "#ffffff"}});
        }
        else{
            this.setState({mainColor: {color: "#222222"}});
        }
        sessionStorage.setItem(1, '[]');
        SetGuest("Guest 1", "Gift 1", "0");
        SetGuest("Guest 2", "Gift 2", "0");
        SetGuest("Guest 3", "Gift 3", "0");
    }

    submitDelete(index){
        if(index !== null){
            DeleteGuest(index);
            if(GetGuestList().length !== 0){
                this.setState({guests: GetGuestList()});
            }
            else{
                this.setState({guests: GetGuestList()});
            }
            this.button.shouldClick((GetGuestList().length >= 3));
        }
    }

    submitEdit(...params){
        if(params[0].state.value !== "" && params[3] !== null){
            if(GetPrice() === "0"){
                EditGuest(params[3], params[0].state.value, params[1].state.value, params[2].inFormat("currency"));
            }
            else if(params[2] <= GetPrice()){
                SetGuest(params[3], params[0].state.value, params[1].state.value, params[2].inFormat("currency"));
            }
        }
        this.setState({guests: GetGuestList()});
        this.props.bottomPanel.closePanel();
    }

    submitGuest(...params){
        if(params[0].state.value !== ""){
            if(GetPrice() === "0"){
                SetGuest(params[0].state.value, params[1].state.value, params[2].inFormat("currency"));
            }
            else if(params[2] <= GetPrice()){
                SetGuest(params[0].state.value, params[1].state.value, params[2].inFormat("currency"));
            }
        }
        this.setState({guests: GetGuestList()});
        this.button.shouldClick((GetGuestList().length >= 3));
        this.props.bottomPanel.closePanel();
    }
    
    getEdit(x){
        let content = <GuestForm name={GetGuest(x)[0]} giftSuggestion={GetGuest(x)[1]} giftPrice={GetGuest(x)[2]} theme={this.props.theme} function={this.submitEdit} to={"edit"} id={x}/>;
        this.props.bottomPanel.openPanel(content);
    }

    getAddGuest(){
        let content = <GuestForm theme={this.props.theme} function={this.submitGuest} to={"add"}/>;
        this.props.bottomPanel.openPanel(content);
    }

    appendGuests(){
        let array = [];
        if(GetGuestList().length !== 0){
            array = GetGuestList().map((x, y) => (<AddedGuest theme={this.props.theme} edit={this.getEdit} delete={this.submitDelete} guestName={x[0]} key={y} id={y}/>));
        }
        return array;
    }

    render(){
        return(
            <div className="page">
                <Header back={1} step={2} theme={this.props.theme} link="/event-details" headerFunction={this.props.headerFunction} bottomPanel={this.props.bottomPanel}/>
                <p className='title' style={this.state.mainColor}>Set the guests.</p>
                <div className="guestList">
                    {(this.appendGuests().length !== 0) ? this.appendGuests().map((x) => (x)) : false}
                    <AddItem function={this.getAddGuest} text="Add guest"/>
                </div>
                <Link to={() => ((GetGuestList().length >= 3)) ? ("/dark-pairs") : false}><Button button={this.state.button} ref={(e) => this.button = e} value="Next" image={RightArrow} alt="Next icon"/></Link>
            </div>
        );
    }
}
