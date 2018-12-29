import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMain } from './action';
import RouterTree from  '../router';
import resizeScreen from '../utils/resizeScreen';
import './index.scss';

import LogoNav from '../component/logoNav';

class App extends Component{
    constructor(props){
        super(props);
    }

    _handleResizeConfig = () => {
        const screenWid = resizeScreen();
        const { setMain, main } = this.props;
        const { isMobile } = main;
        if (screenWid <= 790 && !isMobile) {
            // mobile
            setMain({ isMobile: true });
        }
        if (screenWid > 790 && isMobile) {
            // pc
            setMain({ isMobile: false });
        }
    };

    componentDidMount() {
        this._handleResizeConfig();
        window.addEventListener("resize", this._handleResizeConfig);
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this._handleResizeConfig);
    }

    render(){
        return (
            <div className={`app-layout`}>
                <LogoNav/>
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
