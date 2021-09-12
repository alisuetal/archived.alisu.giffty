import React from "react";
import PressNHold from "../../img/pressAndHold.svg";
import Ellipse from "../../img/ellipse.svg";
import Button from "../button";
import RightArrow from "../../img/rightArrow.svg";
import { Link } from "react-router-dom";
import './index.css';
import { GetPairs } from "../../script";

export default function RevealButton (props){
    const [holderState, setHolderState] = React.useState({transition: "0.5s", backgroundSize: "0px", backgroundImage: Ellipse}); //background
    const [buttonState, setButtonState] = React.useState({backgroundColor: "#8542c8", backgroundImage: PressNHold}); //button
    const [information, setInformation] = React.useState({opacity: 0}); //info
    const [tOut, setTOut] = React.useState(false);
    const [guestTwo, setGuestTwo] = React.useState("...");
    const [mainColor, setMainColor] = React.useState();

    React.useEffect(() => {
        if(props.theme === true){
            setMainColor({color: "#ffffff"});
        }
        else{
            setMainColor({color: "#222222"});
        }
    }, [props.theme]);

    function revealDetail(){
        setHolderState({background: "none"});
        setButtonState({backgroundColor: "transparent", backgroundImage: "none", cursor: "default"});
        setInformation({opacity: 1});
        setGuestTwo(props.guestTwo);
    }

    function startAnimation(){
        if(buttonState["backgroundColor"] !== "transparent"){
            setHolderState({transition: "2.2s", backgroundSize: "140%"});
            setTOut(setTimeout(() => {
                revealDetail();
                setTOut(clearTimeout(tOut));
            }, 2000));
        }
    }
    
    function stopAnimation(){
        setHolderState({transition: "0.5s", backgroundSize: "0vh"});
        setTOut(clearTimeout(tOut));
    }

    return(
        <div>
            <p className="title" style={mainColor}><span>{props.guestOne}</span> got <span>{guestTwo}</span></p>
            <div className="revealButton" style={buttonState} onTouchStartCapture={() => startAnimation()} onMouseDownCapture={() => startAnimation()} onMouseUpCapture={() => stopAnimation()} onTouchEndCapture={() => stopAnimation()}>
                <div className="buttonBackground" style={holderState}>
                    <div className="guestInfo" style={information}>
                        <p className="title" style={mainColor}>Gift suggestion</p>
                        <button className="fieldLike" style={mainColor}>{props.giftSuggestion}</button>
                        <p className="title" style={mainColor}>Gift price (approx.)</p>
                        <button className="fieldLike" style={mainColor}>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(props.giftPrice)}</button>
                        <Link
                            to={() => (props.currentPair === (GetPairs().length - 1)) ? ("/donate") : false}
                            onClick={() => (props.currentPair !== (GetPairs().length - 1)) ? (props.function((e) => (e + 1))) : false}>
                            <Button value="Next" image={RightArrow} alt="Next icon"/>
                        </Link>
                    </div>
                </div>
            </div>
         </div>
    );
}