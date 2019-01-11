import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './ProductList.scss';

class ListItem extends Component{
    constructor (props) {
        super(props);
    }

    handleSkip = () => {

        const { productId, history } = this.props;
        history.push(`/Detail/${productId}`);

    };

    render () {

        const { img, title, price, score } = this.props;

        return (
            <li className={`product-list-item`}>
                <img onClick={this.handleSkip} className={`product-list-item-img`} src={img} alt={title} />
                <p className={`product-list-item-p`}>
                    <span onClick={this.handleSkip} className={`product-list-item-title`} >{title}</span>
                </p>
                <p className={`product-list-item-p`}>价格: <span className={`product-list-item-price`}>￥{price}</span></p>
                <p className={`product-list-item-p`}>评分: <span className={`product-list-item-score`}>{`${score} /10`}</span></p>
            </li>
        );
    }

}

const WrapRouterListItem = withRouter(ListItem);

export default class ProductList extends Component{

    constructor (props) {
        super(props);
    }

    render () {
        const { productList } = this.props;
        return (
            <ul className={`product-list clearfix`}>
                {
                    productList.map((item)=>(
                        <WrapRouterListItem
                            productId={item.id}
                            img={item.img[0]}
                            title={item.name}
                            price={item.price}
                            score={`${item.score}`}
                            key={`product-${item.id}`}
                        />
                    ))
                }
            </ul>
        );
    }

}
