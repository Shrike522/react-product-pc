import React, { Component } from 'react';
import './index.scss';

import ProductList from '../component/ProductList';
import SearchTab from '../component/SearchTab';

export default class Home extends Component{
    constructor (props) {
        super(props);
    }

    componentWillMount () {
        const { setMain } = this.props;
        setMain({ documentTitle: "手机专卖网" });
    }

    render () {
        const { productList, keywords, setKeywords, searchList } = this.props;
        return (
            <div className={`home-layout`}>
                <SearchTab
                    productList={productList}
                    searchList={searchList}
                    keywords={keywords}
                    setKeywords={setKeywords}
                />
                <ProductList
                    productList={productList}
                />
            </div>
        );
    }
}
