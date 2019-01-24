import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMain, setUserStatus } from './action';
import { addMarket } from '../pages/List/action';
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

    componentDidMount () {
        this._handleResizeConfig();
        window.addEventListener("resize", this._handleResizeConfig);

        const { marketList, main, setUserStatus, addMarket } = this.props, { userStatus } = main;
        let sessionMarketList = window.sessionStorage.getItem("marketList");
        if (sessionMarketList && marketList.length === 0) {
            sessionMarketList = JSON.parse(sessionMarketList);
            if (Array.isArray(sessionMarketList) && sessionMarketList.length>0) addMarket(sessionMarketList);
        }

        let sessionStorageUserStatus = window.sessionStorage.getItem("userStatus");
        if (sessionStorageUserStatus) {
            sessionStorageUserStatus = JSON.parse(sessionStorageUserStatus);
            if ((!userStatus || !userStatus.isLogin) && sessionStorageUserStatus.isLogin) {
                setUserStatus(sessionStorageUserStatus);
            }
        }
    }

    componentWillUnmount () {
        window.removeEventListener("resize", this._handleResizeConfig);
        window.sessionStorage.removeItem("marketList");
        window.sessionStorage.removeItem("userStatus");
    }

    render(){

        const { logoNav, userStatus } = this.props.main, { marketList, setUserStatus } = this.props;

        return (
            <div className={`app-layout`}>
                <RouterTree
                    logoNav={logoNav}
                    userStatus={userStatus}
                    marketList={marketList}
                    setUserStatus={setUserStatus}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        main: { ...state.main },
        marketList: state.list.marketList
    });
};

const mapActionToProps = {
    setMain, setUserStatus, addMarket
};

export default connect(mapStateToProps, mapActionToProps)(App);
