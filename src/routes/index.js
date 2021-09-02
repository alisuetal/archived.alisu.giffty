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
import './index.css';
import SelectItems from "../components/selectItems";

export default class Routes extends React.Component{
    constructor(props){
        super(props);
        this.state = {bottomPanel: "", pageStyle: {backgroundColor: "#ffffff"}, theme: 0};
        this.settings = this.settings.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
    }

    componentDidMount(){
        this.setState({bottomPanel: this.bottomPanel});
    }

    changeTheme(x){
        if(x.target.value === "2"){
            this.setState({pageStyle: {backgroundColor: "#222222"}, theme: 1});
            this.bottomPanel.theme(1);
            this.selectTheme.theme(1);
        }
        else{
            this.setState({pageStyle: {backgroundColor: "#ffffff"}, theme: 0});
            this.bottomPanel.theme(0);
            this.selectTheme.theme(0);
        }
    }

    settings(){
        let content = 
        <SelectItems ref={(child) => this.selectTheme = child} content={["Select a theme", "Light theme", "Dark theme"]} function={this.changeTheme} theme={this.state.theme}/>;
        this.bottomPanel.openPanel(content);
    }

    render(){
        return(
            <BrowserRouter>
                <div className="root-page" style={this.state.pageStyle}>
                    <BottomPanel ref={(child) => this.bottomPanel = child}/>
                    <Switch>
                        <Route exact path="/" component={() => (<Index bottomPanel={this.state.bottomPanel} headerFunction={this.settings} theme={this.state.theme}/>)}/>
                        <Route exact path="/event-details" component={() => (<EventDetails bottomPanel={this.state.bottomPanel} headerFunction={this.settings} theme={this.state.theme}/>)}/>
                        <Route exact path="/guests" component={() => (<Guests bottomPanel={this.state.bottomPanel} headerFunction={this.settings} theme={this.state.theme}/>)}/>
                        <Route exact path="/dark-pairs" component={() => (<DarkPairs bottomPanel={this.state.bottomPanel} headerFunction={this.settings} theme={this.state.theme}/>)}/>
                        <Route exact path="/game-begin" component={() => (<GameBegin bottomPanel={this.state.bottomPanel} headerFunction={this.settings} theme={this.state.theme}/>)}/>
                        <Route exact path="/reveal" component={() => (<Reveal bottomPanel={this.state.bottomPanel} headerFunction={this.settings} theme={this.state.theme}/>)}/>
                        <Route exact path="/donate" component={() => (<Donate bottomPanel={this.state.bottomPanel} headerFunction={this.settings} theme={this.state.theme}/>)}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}