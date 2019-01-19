import React, { Component } from 'react';

export default class Detail extends Component{

    constructor (props) {
        super(props);
    }

    handleClickProductNum = (control) => {
        const { setProductNum } = this.props;
        setProductNum(control);
    };

    handleInProductNum = (e) => {
        const { value } = e.target, { setProductNum } = this.props;
        setProductNum(value);
    };

    handleClickAddMarket = () => {
        // 加入购物车
        const { addMarket, marketList, product, productNum, history } = this.props;
        let isHasProduct = false;
        marketList.every((item) => {
            if (item.product.id === product.id) {
                isHasProduct = true;
                return false;
            }
            return true;
        });
        if (isHasProduct) {
            addMarket({ id: product.id, productNum });
        } else {
            addMarket({ product, productNum });
        }
        history.push(`/List`);
    };

    componentDidMount () {
        const { productRootList, match, getProduct } = this.props, productId = match.params.id;
        let found = productRootList.find((item) => {
            return item.id === productId;
        });
        getProduct(found);
    }

    render(){
        const { product, productNum } = this.props;
        return (
            <div>
                Detail
            </div>
        );
    }
}
