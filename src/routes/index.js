import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BottomPanel from "../components/bottomPanel";
import Index from "../pages/index";
import EventDetails from "../pages/eventDetails";
import Guests from "../pages/guests"
import DarkPairs from "../pages/darkPairs";
import GameBegin from "../pages/gameBegin";
import Reveal from "../pages/reveal";
import Donate from "../pages/donate";
import SelectItems from "../components/selectItems";
import './index.css';


export default function Routes (){
    const [panelContent, setPanelContent] = React.useState(false);
    const [background, setBackground] = React.useState({backgroundColor: "#ffffff"});
    const [theme, setTheme] = React.useState(false);
    const baseSelect = <SelectItems value={+theme} content={[["Light theme", 0], ["Dark theme", 1]]} select="theme" function={changeTheme} theme={theme}/>;

    function changeTheme(...x){
        if(x[0] === "1"){
            setTheme(true);
            setBackground({backgroundColor: "#222222"});
        }
        else{
            setTheme(false);
            setBackground({backgroundColor: "#ffffff"});
        }
    }

    React.useEffect(() => {
        if(panelContent !== false){
            setPanelContent(baseSelect);
        }
    }, [theme])

    function settings(){
        setPanelContent(baseSelect);
    }

    return(
        <BrowserRouter>
            <div className="root-page" style={background}>
                {(panelContent) ? <BottomPanel theme={theme} closePanel={() => setPanelContent(false)} content={panelContent}/> : false}
                <Switch>
                    <Route exact path="/" component={() => (<Index headerFunction={settings} theme={theme}/>)}/>
                    <Route exact path="/event-details" component={() => (<EventDetails headerFunction={settings} theme={theme}/>)}/>
                    <Route exact path="/guests" component={() => (<Guests headerFunction={settings} theme={theme}/>)}/>
                    <Route exact path="/dark-pairs" component={() => (<DarkPairs headerFunction={settings} theme={theme}/>)}/>
                    <Route exact path="/game-begin" component={() => (<GameBegin headerFunction={settings} theme={theme}/>)}/>
                    <Route exact path="/reveal" component={() => (<Reveal headerFunction={settings} theme={theme}/>)}/>
                    <Route exact path="/donate" component={() => (<Donate headerFunction={settings} theme={theme}/>)}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}