import React, { Component } from 'react';
import { Tabs } from 'antd';
import './index.scss';

import SignIn from './SignIn';
import SignUp from './SignUp';

const TabPane = Tabs.TabPane;

export default class Login extends Component{

    constructor (props) {
        super(props);
    }

    handleTab = (key) => {
        const { getTabPane } = this.props;
        getTabPane(key);
    };

    componentWillMount () {
        const { setMain } = this.props;
        setMain({ logoNav: false });
    }

    componentWillUnmount () {
        const { setMain } = this.props;
        setMain({ logoNav: true });
    }

    render(){

        const { tab } = this.props;

        return (
            <div className={`login-form`}>
                <Tabs activeKey={tab} onChange={this.handleTab} >
                    <TabPane tab={`登陆`} key={`signUp`} >
                        <SignUp {...this.props} />
                    </TabPane>
                    <TabPane tab={`注册`} key={`signIn`} >
                        <SignIn {...this.props} />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}
