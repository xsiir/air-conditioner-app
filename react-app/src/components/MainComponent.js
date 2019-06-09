    
import React, { Component } from "react";
import {fetchState} from "../actions/airActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class MainComponent extends Component {
    state = {
        airState: ""
    };

    componentDidMount(){
       this.props.fetchState();
    }

    render() {
        return (
            <div>
                <button>TURN ON</button>
                <button>TURN OFF</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    airState: state.airState
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchState: fetchState
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
