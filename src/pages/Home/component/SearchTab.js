import React, { Component } from 'react';
import './SearchTab.scss';

const tempList = {
    "brand": {
        title: "品牌",
        filter: [ "华硕", "技嘉", "微星" ]
    },
    "GPU": {
        title: "显卡芯片",
        filter: [
            {
                total: "NVIDIA",
                classify: [ "RTX 2080ti", "RTX 2080", "RTX 2070", "GTX 1080ti", "GTX 1080", "GTX 1070ti", "RTX 1070", "GTX 1060" ]
            },
            {
                total: "AMD",
                classify: [ "RX 580", "RX 570" ]
            }
        ]
    },
    "memoryType": {
        title: "显存类型",
        filter: [ "GDDR6", "GDDR5X", "GDDR5", "HBM2" ]
    },
    "memorySize": {
        title: "显存容量",
        filter: [ "12GB", "11GB", "8GB", "6GB", "4GB" ]
    },
    "memoryBit": {
        title: "显存位宽",
        filter: [ "352bit", "256bit", "192bit" ]
    },
};

const SearchTabPane = (isActive, disable, content, handleClick) => (
    <dd>
        <span
            onClick={disable || isActive ? null : handleClick}
            className={`${isActive ? "search-tab-pane-active" : ""} ${disable ? "search-tab-pane-disable" : ""}`}
        >{content}</span>
    </dd>
);

const makeSearchTabEle = (tabList) => {

    // tabList  检索列表
    // 生成可嵌套的检索选项
    const OptsEle = (opts, keyword, filterTabList, handleClick) => {
        return opts.map((optItem, j) => {

            if (typeof optItem === "object") {
                const { classify } = optItem;
                let active = false, totalDisable = true;
                if (optItem.total === keyword) active = true;
                classify.every((classifyItem) => {
                    if (filterTabList.includes(classifyItem)) {
                        totalDisable = false;
                        return false;
                    }
                    return true;
                });
                return (
                    <dd key={j}>
                        <span
                            className={`${active ? "search-tab-pane-active" : ""} ${totalDisable ? "search-tab-pane-disable" : ""}`}
                            onClick={totalDisable || active ? null : handleClick}
                        >{optItem.total}</span>
                        <span>(</span>
                        {
                            OptsEle(classify, keyword, filterTabList, handleClick)
                        }
                        <span>)</span>
                    </dd>
                )
            }

            return (
                <SearchTabPane
                    isActive={keyword === optItem ? (true) : (false)}
                    disable={filterTabList.includes(optItem) ? (false) : (true)}
                    content={optItem}
                    handleClick={handleClick}
                />
            )
        })
    };

    return (productList, keywords) => {

        // productList  检索后的商品列表
        // keywords  检索后的关键字

        const tabAttrs = Object.keys(tabList);

        // 遍历商品列表, 筛选出当前商品可用于检索的项
        let filterTab = {};
        if (productList && Array.isArray(productList) && productList.length>0) {
            productList.forEach((item) => {
                // item 单一商品数据 { key1:value1, key2:value2... }
                Object.keys(item).forEach((attr) => {
                    // attr item中的属性名
                    if (tabAttrs.includes(attr)) {
                        // 判断item中的属性名是否在检索列表中
                        const value = item[attr];
                        if (attr in filterTab) {
                            if (!filterTab[attr].includes(value)) filterTab[attr].push(value);
                        } else {
                            filterTab[attr] = [ value ];
                        }
                    }
                })
            });
        }

        tabAttrs.map((item, i) => {

            const opts = tabList[item].filter,
                title = tabList[item].title,
                keyword = keywords[item],
                filterTabList = filterTab[item] || []
            ;
            let ele = null;
            if (typeof opts === "object" && Array.isArray(opts)) {
                ele = OptsEle(opts, keyword, filterTabList, null);
            }

            return (
                <dl key={i}>
                    <dt>{title}</dt>
                    {ele}
                </dl>
            );
        });

    }

};

export default class SearchTab extends Component {

    constructor (props) {
        super(props);
    }

    makeList = () => makeSearchTabEle(tempList);

    render () {
        const { productList, keywords } = this.props;
        return (
            <div className={`search-tab`}>
                { this.makeList(productList, keywords) }
            </div>
        );
    }

}
