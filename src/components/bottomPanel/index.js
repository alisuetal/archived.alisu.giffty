import React from "react";
import LineWhite from "../../img/lineWhite.svg";
import LineBlack from "../../img/lineBlack.svg";
import './index.css';

export default function BottomPanel (props){
    const content = props.content;
    const [iconPanel, setIcon] = React.useState(LineBlack);

    const[styleHolder, setStyleHolder] = React.useState({
        "opacity": {opacity: "0"},
        "display": {display: "none"},
    });

    const[stylePanel, setStylePanel] = React.useState({
        "margin": {marginBottom: "-100vh"},
        "display": {display: "none"},
    });

    React.useEffect(() => {
        if(props.theme === true){
            setStyleHolder((style) => ({...style, "background": {backgroundColor: "rgba(10, 10, 10, 0.5)"}}));
            setStylePanel((style) => ({...style, "background": {backgroundColor: "rgba(0, 0, 0, 0.7)"}}));
            setIcon(LineWhite);
        }
        else{
            setStyleHolder((style) => ({...style, "background": {backgroundColor: "rgba(200, 200, 200, 0.5)"}}));
            setStylePanel((style) => ({...style, "background": {backgroundColor: "rgba(255, 255, 255, 0.7)"}}));
            setIcon(LineBlack);
        }
    }, [props.theme]);

    React.useEffect(() => {
        setStyleHolder((style) => ({...style, "display": {display: "flex"}}));
        setStylePanel((style) => ({...style, "display": {display: "block"}}));
        setTimeout(() => {
            setStyleHolder((style) => ({...style, "opacity": {opacity: "1"}}));
        }, 10);
        setTimeout(() => {
            setStylePanel((style) => ({...style, "margin": {marginBottom: "0vh"}}));
        }, 20);
    }, []);

    function unmount(){
        setStylePanel((style) => ({...style, "margin": {marginBottom: "-100vh"}}));
        setTimeout(() => {
            setStylePanel((style) => ({...style, "display": {display: "none"}}));
            setStyleHolder((style) => ({...style, "opacity": {opacity: "0"}}));
        }, 400);
        setTimeout(() => {
            setStyleHolder((style) => ({...style, "display": {display: "none"}}));
        }, 410);
        setTimeout(() => {
            props.closePanel();
        }, 420);
    }

    return(
        <div style={Object.assign({}, ...Object.keys(styleHolder).map((x) => (styleHolder[x])))} className="bottomPanelHolder">
            <div style={Object.assign({}, ...Object.keys(stylePanel).map((x) => (stylePanel[x])))} className='bottomPanel' align='center'>
                <img src={iconPanel} alt="Closing panel icon" align='center' onClick={() => unmount()}/>
                {content}
            </div>
        </div>
    );
}