import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import AddedGuest from "../../components/addedGuest";
import AddItem from "../../components/addItem";
import GuestForm from "../../components/guestForm";
import BottomPanel from "../../components/bottomPanel";
import { GetGuestList, GetGuest, EditGuest, SetGuest, GetPrice, DeleteGuest } from "../../script";
import "./index.css";

export default function Guests (props){
    const [mainColor, setMainColor] = React.useState({color: ""});
    const [panelContent, setPanelContent] = React.useState(false);
    const [guests, setGuests] = React.useState(GetGuestList());
    const [button, setButton] = React.useState((guests.length >= 3));

    React.useEffect(() => {
        if(props.theme === true){
            setMainColor({color: "#ffffff"});
        }
        else{
            setMainColor({color: "#222222"});
        }
    }, [props.theme]);

    function updateStates(){
        setGuests(GetGuestList());
        setButton((GetGuestList().length >= 3));
    }

    function submitDelete(index){
        DeleteGuest(index);
        updateStates();
    }

    function submitEdit(...params){
        if(GetPrice() === "0" || parseInt(params[3]) <= parseInt(GetPrice())){
            EditGuest(params[0], params[1], params[2], params[3]);
            updateStates();
        }
    }

    function submitGuest(...params){
        if(GetPrice() === "0" || params[2] <= GetPrice()){
            SetGuest(params[0], params[1], params[2]);
            updateStates();
        }
    }
    
    function getEdit(x){
        setPanelContent(
            <GuestForm name={GetGuest(x)[0]} giftSuggestion={GetGuest(x)[1]} giftPrice={GetGuest(x)[2]} theme={props.theme} function={submitEdit} to="edit" id={x}/>
        );
    }

    function getAddGuest(){
        setPanelContent(
            <GuestForm theme={props.theme} function={submitGuest} to="add"/>
        );
    }

    function appendGuests(){
        let array = [];
        if(GetGuestList().length !== 0){
            array = GetGuestList().map((x, y) => (
                <AddedGuest theme={props.theme} edit={getEdit} delete={submitDelete} guestName={x[0]} key={y} id={y}/>
            ));
        }
        return array;
    }

    return(
        <div className="page">
            {(panelContent) ? <BottomPanel theme={props.theme} closePanel={() => setPanelContent(false)} content={panelContent}/> : false}
            <Header step={2} theme={props.theme} link="/event-details" headerFunction={props.headerFunction}/>
            <p className='title' style={mainColor}>Set the guests.</p>
            <div className="guestList">
                {(appendGuests().length !== 0) ? appendGuests().map((x) => (x)) : false}
                <AddItem function={getAddGuest} text="Add guest"/>
            </div>
            <Link to={() => (button) ? ("/dark-pairs") : false}><Button button={button} value="Next" image={RightArrow} alt="Next icon"/></Link>
        </div>
    );
}
