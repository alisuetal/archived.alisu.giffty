import React from "react";
import Header from "../../components/header";
import RevealButton from "../../components/revealButton";
import { GetGuest, GetPair } from "../../script";
import "./index.css";

export default function Reveal (props){
    const [currentPair, setCurrentPair] = React.useState(0);

    function appendPair(){
        let pair = [GetGuest(GetPair(currentPair)[0]), GetGuest(GetPair(currentPair)[1])];
        return(
            <RevealButton 
                key={pair[0][0]}
                currentPair={currentPair}
                function={setCurrentPair}
                guestOne={pair[0][0]}
                guestTwo={pair[1][0]}
                giftSuggestion={pair[1][1]}
                giftPrice={pair[1][2]} 
                theme={props.theme}
            />
        );
    }

    return(
        <div className="page">
            <Header back={0} theme={props.theme} headerFunction={props.headerFunction}/>
            {appendPair()}
        </div>
    );
}