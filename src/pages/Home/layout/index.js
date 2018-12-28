import React, { Component } from 'react';
import './index.scss';

export default class Home extends Component{
    constructor (props) {
        super(props);
    }

    _handleName = (e) => {
        const { getName } = this.props;
        getName(e.target.value);
    };

    _handleUser = (e) => {
        const { getUser } = this.props;
        getUser(e.target.value);
    };

    componentWillMount () {
        const { setMain } = this.props;
        setMain({ documentTitle: "手机专卖网" });
    }

    render () {
        const { name, user } = this.props;
        return (
            <div className={`home-layout`}>
                <h1>Home</h1>
                <div>
                    <input onChange={this._handleName} value={name} type="text"/>
                    <br/>
                    <input onChange={this._handleUser} value={user} type="text"/>
                </div>
            </div>
        );
    }
}
