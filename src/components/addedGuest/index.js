import React from "react";
import DeleteBlack from "../../img/deleteBlack.svg";
import DeleteWhite from "../../img/deleteWhite.svg";
import EditBlack from "../../img/editBlack.svg";
import EditWhite from "../../img/editWhite.svg";
import "./index.css";

export default class AddedGuest extends React.Component{
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
            <button className='addedGuest'>
                <span style={this.state.color}>{this.props.name}</span>
                <div>
                    <img src={this.state.delete} alt="Delete" align='right'/>
                    <img src={this.state.edit} onClick={this.props.function} alt="Edit" style={{'marginRight': '1vh'}} align='right'/>
                </div>
            </button>
        );
    }
}