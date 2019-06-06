    
import React, { Component } from "react";
import {fetchState} from "../actions/airActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class MainComponent extends Component {

      constructor(props) {
        super(props);

    
        this.state = {
           airState:""
        }

    }

    componentDidMount(){
       this.props.fetchState();
    }



    render() {
            console.log(this.props.airState);
        return (
            <div id="AboutContainer"className="">
            
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        airState: state.airState
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchState:fetchState},dispatch)
}


export default connect(mapStateToProps,matchDispatchToProps)(MainComponent);
