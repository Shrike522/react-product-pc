import React, { Component } from 'react';

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

    render () {
        const { name, user } = this.props;
        return (
            <div>
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