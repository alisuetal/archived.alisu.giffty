import React from "react";
import DeleteBlack from "../../img/deleteBlack.svg";
import DeleteWhite from "../../img/deleteWhite.svg";
import EditBlack from "../../img/editBlack.svg";
import EditWhite from "../../img/editWhite.svg";
import "./index.css";

export default class DarkPair extends React.Component{
    constructor(props){
        super(props);
        this.state = {delete: DeleteBlack, edit: EditBlack, color: {color: "#222222"}};
    }

    componentDidMount(){
        if(this.props.theme === 1){
            this.setState({delete: DeleteWhite, edit: EditWhite, color: {color: "#ffffff"}});
        }
        else{
            this.setState({delete: DeleteBlack, edit: EditBlack, color: {color: "#222222"}});
        }
    }

    render(){
        return(
            <button className='darkPair'>
                <div>
                    <span style={this.state.color}>{this.props.nameOne}</span>
                    <img src={this.state.edit} onClick={() => this.props.edit(this.props.pairIndex)} alt="Edit" align='right'/>
                </div>
                <div>
                    <span style={this.state.color}>{this.props.nameTwo}</span>
                    <img src={this.state.delete} onClick={() => this.props.delete(this.props.pairIndex)} alt="Delete" align='right'/>
                </div>
            </button>
        );
    }
}