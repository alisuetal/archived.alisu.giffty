import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Button from "../../components/button";
import RightArrow from "../../img/rightArrow.svg";
import DarkPair from "../../components/darkPair";
import AddItem from "../../components/addItem";
import InfoBlack from "../../img/infoBlack.svg";
import InfoWhite from "../../img/infoWhite.svg";
import { GetDarkPair, GetDarkPairs, EditDarkPair, DeleteDarkPair, SetDarkPair, GetGuest} from "../../script";
import BottomPanel from "../../components/bottomPanel";
import "./index.css";
import DarkPairForm from "../../components/darkPairForm";

export default function DarkPairs (props){
    const [mainColor, setMainColor] = React.useState({color: ""});
    const [icon, setIcon] = React.useState();
    const [darkPairs, setDarkPairs] = React.useState(GetDarkPairs());
    const [panelContent, setPanelContent] = React.useState(false);
    const buttonValue = (appendDarkPairs().length === 0) ? ("Skip") : ("Next");

    React.useEffect(() => {
        if(props.theme === true){
            setMainColor({color: "#ffffff"});
            setIcon(InfoWhite);
        }
        else{
            setMainColor({color: "#222222"});
            setIcon(InfoBlack);
        }
    }, [props.theme]);

    function updateStates(){
        setDarkPairs(GetDarkPairs());
    }

    function infoDarkPair(){
        setPanelContent(
            <div>
                <p style={mainColor} className="title">We understand that not everybody can be friends.</p>
                <p style={mainColor} className="title">That’s why you can set Dark Pairs, preventing people that don’t get along too well to pick each other.</p>
            </div>
        );
    }

    function submitDelete(index){
        DeleteDarkPair(index);
        updateStates();
    }

    function submitEdit(...params){
        if(EditDarkPair(params[2], params[0], params[1])){
            updateStates();
        }
    }

    function submitDarkPair(...params){
        if(SetDarkPair(params[0], params[1])){
            updateStates();
        }
    }
    
    function getEdit(x){
        let y = GetDarkPair(x);
        setPanelContent(
            <DarkPairForm valueOne={y[0]} valueTwo={y[1]} function={submitEdit} theme={props.theme} id={x}/>
        );
    }

    function getAddDarkPair(){
        setPanelContent(
            <DarkPairForm function={submitDarkPair} theme={props.theme}/>
        );
    }

    function appendDarkPairs(){
        let array = [];
        if(darkPairs.length !== 0){
            array = darkPairs.map((x, y) => (<DarkPair theme={props.theme} edit={getEdit} pairIndex={y} delete={submitDelete} nameOne={GetGuest(x[0])[0]} nameTwo={GetGuest(x[1])[0]} key={y} id={y}/>));
        }
        return array;
    }

    return(
        <div className="page">
            {(panelContent) ? <BottomPanel theme={props.theme} closePanel={() => setPanelContent(false)} content={panelContent}/> : false}
            <Header step={3} theme={props.theme} link="/guests" headerFunction={props.headerFunction}/>
            <p className='title' style={mainColor}>
                Would you like to set any dark pairs?
                <img alt="Information icon" src={icon} onClick={() => infoDarkPair()}/>
            </p>
            <div className="guestList">
                {(appendDarkPairs().length !== 0) ? appendDarkPairs().map((x) => (x)) : false}
                <AddItem function={getAddDarkPair} text="Add Dark Pair"/>
            </div>
            <Link to="/game-begin">
                <Button value={buttonValue} image={RightArrow} alt="Next icon"/>
            </Link>
        </div>
    );

}
