import React from "react";
import DownBlack from "../../img/downBlack.svg";
import DownWhite from "../../img/downWhite.svg";
import './index.css';

export default class SelectItems extends React.Component{
    constructor(props) {
        super(props);
        this.state = {style: {color: "#222222", backgroundImage: "url(" + DownBlack + ")"}, theme: 0, isSelecting: (this.props.isSelecting !== undefined && this.props.isSelecting === true), selected: ((this.props.value !== undefined) ? (this.props.value.toString()) : ("-1"))};
        this.setSelected = this.setSelected.bind(this);
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({style: {color: "#ffffff", backgroundImage: "url(" + DownWhite + ")"}, theme: 1});
        }

        if(this.props.value !== undefined){
            this.optionSelected.selected = true;
        }
    }

    setSelected(obj, e){
        if(this.props.function !== undefined && obj !== undefined){
            this.props.function(obj, e);
        }
        this.setState({selected: e.toString()});

        if(e === "-1"){
            this.setState({isSelecting: false});
        }
        else{
            this.setState({isSelecting: true});
        }
    }

    theme(e){
        if(e === 1 && this.state.theme !== 1){
            this.setState({style: {color: "#ffffff", backgroundImage: "url(" + DownWhite + ")"}, theme: 1});
        }
        else if(e === 0 && this.state.theme !== 0){
            this.setState({style: {color: "#222222", backgroundImage: "url(" + DownBlack + ")"}, theme: 0});
        }
    }

    render(){
        return(
            <select style={this.state.style} onChange={(e) => this.setSelected(this, e.target.value)}>
                {this.props.content.map((x) => (<option key={x[1] + this.props.select} ref={(e) => (x[1].toString() === this.state.selected) ? this.optionSelected = e : false} value={x[1]}>{x[0]}</option>))}
            </select>
        );
    }
}
