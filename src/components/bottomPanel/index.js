import React from "react";
import LineWhite from "../../img/lineWhite.svg";
import LineBlack from "../../img/lineBlack.svg";
import './index.css';

export default class BottomPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            styleHolder: {opacity: '0', display: 'none'},
            stylePanel: {marginBottom: '-100vh', display: 'none'},
            holderBackground: {backgroundColor: "rgba(200, 200, 200, 0.5)"},
            panelBackground: {backgroundColor: "rgba(255, 255, 255, 0.7)"},
            panelIcon: LineBlack, content: ""
        };
        this.openPanel = this.openPanel.bind(this);
        this.closePanel = this.closePanel.bind(this);
        this.theme = this.theme.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({holderBackground: {backgroundColor: "rgba(10, 10, 10, 0.5)"}, panelBackground: {backgroundColor: "rgba(0, 0, 0, 0.7)"}, panelIcon: LineWhite});
        }
    }

    theme(e){
        if(e === 1 && this.state.theme !== 1){
            this.setState({holderBackground: {backgroundColor: "rgba(10, 10, 10, 0.5)"}, panelBackground: {backgroundColor: "rgba(0, 0, 0, 0.7)"}, panelIcon: LineWhite});
        }
        else if(e === 0 && this.state.theme !== 0){
            this.setState({holderBackground: {backgroundColor: "rgba(200, 200, 200, 0.5)"}, panelBackground: {backgroundColor: "rgba(255, 255, 255, 0.7)"}, panelIcon: LineBlack});
        }
    }

    openPanel(c){
        this.setState({content: c});
        this.setState({styleHolder: {opacity: '0', display: 'flex'}});
        this.setState({stylePanel: {marginBottom: '-100vh', display: 'block'}});
        setTimeout(() => {
            this.setState({styleHolder: {opacity: '1', display: 'flex'}});
        }, 10);
        setTimeout(() => {
            this.setState({stylePanel: {marginBottom: '0vh', display: 'block'}});
        }, 20);
    }

    closePanel(){
        this.setState({stylePanel: {marginBottom: '-100vh', display: 'block'}});
        setTimeout(() => {
            this.setState({stylePanel: {marginBottom: '-100vh', display: 'none'}});
            this.setState({styleHolder: {opacity: '0', display: 'flex'}});
        }, 400);
        setTimeout(() => {
            this.setState({styleHolder: {opacity: '0', display: 'none'}});
        }, 410);
        this.setState({content: ""});
    }
    
    render(){
        let holderProps = Object.assign({}, ...[this.state.styleHolder, this.state.holderBackground].map((x, y, z)=>(x)));
        let panelProps = Object.assign({}, ...[this.state.stylePanel, this.state.panelBackground].map((x, y, z)=>(x)));
        return(
            <div style={holderProps} className="bottomPanelHolder">
                <div style={panelProps} className='bottomPanel' align='center'>
                    <img src={this.state.panelIcon} alt="Closing panel icon" align='center' onClick={this.closePanel}/>
                    {this.state.content}
                </div>
            </div>
        );
    }
}