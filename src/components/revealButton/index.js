import React from "react";
import PressNHold from "../../img/pressAndHold.svg";
import Ellipse from "../../img/ellipse.svg";
import './index.css';

export default function RevealButton (props){
    const [holderState, setHolderState] = React.useState({transition: "0.5s", backgroundSize: "0px", backgroundImage: Ellipse}); //background
    const [buttonState, setButtonState] = React.useState({backgroundColor: "#8542c8", backgroundImage: PressNHold}); //button
    const [information, setInformation] = React.useState({opacity: 0}); //info
    const [tOut, setTOut] = React.useState(false);
    const [guestTwo, setGuestTwo] = React.useState("...");
    const [mainColor, setMainColor] = React.useState({color: "#222222"});


    React.useEffect(() => {
        if(props.theme === true){
            setMainColor({mainColor: {color: "#ffffff"}});
        }
        else{
            setMainColor({mainColor: {color: "#222222"}});
        }
    }, [props.theme]);

    function revealDetail(){
        setHolderState((state) => ({...state, background: "none"}));
        setButtonState({backgroundColor: "transparent", backgroundImage: "none", cursor: "default"});
        setInformation({opacity: 1});
        setGuestTwo(props.guestTwo);
    }

    function startAnimation(){
        if(buttonState["backgroundColor"] !== "transparent"){
            setHolderState((state) => ({...state, transition: "2.2s", backgroundSize: "140%"}));
            setTOut(setTimeout(() => {
                revealDetail();
                setTOut((state) => (clearTimeout(state)));
            }, 2000));
        }
    }
    
    function stopAnimation(){
        setHolderState((state) => ({...state, transition: "0.5s", backgroundSize: "0vh"}));
        setTOut((state) => (clearTimeout(state)));
    }

    return(
        <div>
            <p className="title" style={mainColor}><span>{props.guestOne}</span> got <span>{guestTwo}</span></p>
            <div className="revealButton" style={buttonState} onTouchStartCapture={() => startAnimation()} onMouseDownCapture={() => startAnimation()} onMouseUpCapture={() => stopAnimation()} onTouchEndCapture={() => stopAnimation()}>
                <div className="buttonBackground" style={holderState}>
                    <div className="guestInfo" style={information}>
                        <p className="title" style={mainColor}>Gift suggestion</p>
                        <button style={mainColor}>{props.giftSuggestion}</button>
                        <p className="title" style={mainColor}>Gift price (approx.)</p>
                        <button style={mainColor}>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD',}).format(props.giftPrice)}</button>
                    </div>
                </div>
            </div>
         </div>
    );
}