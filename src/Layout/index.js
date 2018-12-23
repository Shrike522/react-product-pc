import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMain } from './action';
import RouterTree from  '../router';
import resizeScreen from '../utils/resizeScreen';
import './index.scss';

class App extends Component{
    constructor(props){
        super(props);
    }

    _handleResizeConfig = () => {
        const screenWid = resizeScreen();
        const { setMain } = this.props;
        if (screenWid <= 790) {
            // mobile
            setMain({ isMobile: true });
        } else {
            setMain({ isMobile: false });
        }
    };

    componentDidMount() {
        this._handleResizeConfig();
        document.addEventListener("resize", this._handleResizeConfig);
    }

    componentWillUnmount () {
        document.removeEventListener("resize", this._handleResizeConfig);
    }

    render(){
        return (
            <div>
                <RouterTree/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        main: { ...state.main }
    });
};

const mapActionToProps = {
    setMain
};

export default connect(mapStateToProps, mapActionToProps)(App);
