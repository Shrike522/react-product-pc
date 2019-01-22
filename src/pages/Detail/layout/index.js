import React, { Component } from 'react';
import './index.scss';

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
        const { productRootList, match, getProduct } = this.props, productId = parseInt(match.params.id);
        let found = productRootList.find((item) => {
            return item.id === productId;
        });
        getProduct(found);
    }

    render(){
        const { product, productNum } = this.props;
        if (!product) return null;
        return (
            <div className={`detail-layout clearfix`}>
                <img src={product.img[0]} alt={`显卡专卖网`} className={`detail-img`} />
                <div className={`detail-content`}>
                    <h2 className={`detail-content-title`}>{product.name}</h2>
                    <p className={`detail-content-group`}>
                        <span className={`detail-content-tag`}>价格: </span>
                        <span className={`detail-content-price`}>￥ {product.price}</span>
                    </p>
                    <div className={`detail-content-group clearfix`}>
                        <span className={`detail-content-tag num-tag`}>数量: </span>
                        <button className={`detail-content-num-btn`} onClick={() => this.handleClickProductNum("sub")}>-</button>
                        <input className={`detail-content-num-input`} type="number" value={productNum} min={1} max={100} onChange={this.handleInProductNum} />
                        <button className={`detail-content-num-btn`} onClick={() => this.handleClickProductNum("add")}>+</button>
                    </div>
                    <button className={`detail-content-market-btn`} onClick={this.handleClickAddMarket}>加入购物车</button>
                </div>
            </div>
        );
    }
}
