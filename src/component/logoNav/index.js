import React, { Component } from 'react';
import './index.scss';

export default class LogoNav extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className={`logo-nav-bg`}>
                <div className={`logo-nav clearfix`}>
                    <div className={`logo-nav-left`}>
                        <h1 className={`logo-nav-title`}>欢迎来到手机专卖网</h1>
                    </div>
                    <ul className={`logo-nav-right clearfix`}>
                        <li className={`logo-nav-li`}>
                            <button className={`logo-nav-li-btn`}>您好 请登录</button>
                            <button className={`logo-nav-li-btn btn-active`}>免费注册</button>
                        </li>
                        <li className={`logo-nav-li`}>
                            <button className={`logo-nav-li-btn`}>相关说明</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}
