import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

class LogoNav extends Component {

    constructor (props) {
        super(props);
    }

    handleClickLinkMarket = () => {
        this.props.history.push("/List");
    };

    handleClickLinkSignUp = () => {
        this.props.history.push("/Login");
    };

    handleClickLinkSignOut = () => {
        this.props.setUserStatus({ userName: "", password: "", isLogin: false });
        window.sessionStorage.removeItem("userStatus");
    };

    render () {
        const { marketList, userStatus } = this.props;
        return (
            <div className={`logo-nav-bg`}>
                <div className={`logo-nav clearfix`}>
                    <div className={`logo-nav-left`}>
                        <h1 className={`logo-nav-title`}>欢迎来到手机专卖网</h1>
                    </div>
                    <ul className={`logo-nav-right clearfix`}>
                        <li className={`logo-nav-li`}>
                            <button onClick={userStatus.isLogin ? null : this.handleClickLinkSignUp} className={`logo-nav-li-btn`}>
                                {
                                    userStatus.isLogin ?
                                        `欢迎您! ${userStatus.userName}`
                                        :
                                        `您好! 请登录`
                                }
                            </button>
                            <button className={`logo-nav-li-btn btn-active`}>免费注册</button>
                        </li>
                        <li className={`logo-nav-li`}>
                            <button onClick={this.handleClickLinkMarket} className={`logo-nav-li-btn`}>购物车({ marketList.length })</button>
                            {/*购物车 - { marketList.length }*/}
                        </li>
                        {
                            userStatus.isLogin ?
                                <li className={`logo-nav-li`}>
                                    <button onClick={this.handleClickLinkSignOut} className={`logo-nav-li-btn`}>退出登录</button>
                                </li>
                                :
                                null
                        }
                    </ul>
                </div>
            </div>
        );
    }

}

export default withRouter(LogoNav);
