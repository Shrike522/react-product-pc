import React, { Component } from 'react';
import './index.scss';

export default class List extends Component{

    constructor (props) {
        super(props);
    }

    handleClickChangeMarket = (control, id) => {
        const { addMarket, subMarket } = this.props;
        switch (control) {
            case "add":
                addMarket(id);
                break;
            case "sub":
                subMarket(id);
                break;
        }
    };

    handleInputMarket = (e, id) => {
        const { setMarketNum } = this.props, { value } = e.target;
        setMarketNum({ id, productNum: value });
    };

    handleDeleteMarket = (id) => {
        const { delMarket } = this.props;
        delMarket(id);
    };

    render(){

        const { marketList } = this.props;

        return (
            <div>
                {
                    marketList.map((item) => {
                        return (
                            <div>{item.product.id}</div>
                        );
                    })
                }
            </div>
        );
    }
}
