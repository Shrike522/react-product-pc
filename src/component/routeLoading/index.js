import React, { Component } from 'react';
import { Spin } from 'antd';
import './index.scss';

export default class RouteLoading extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className={`loading-box`}>
                <div className={`loading-icon`}>
                    <Spin delay={300} tip="Loading..."/>
                </div>
            </div>
        );
    }

}
