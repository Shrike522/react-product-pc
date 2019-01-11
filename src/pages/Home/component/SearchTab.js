import React, { Component } from 'react';
import './SearchTab.scss';

class SearchTabPane extends Component {
    render () {
        const { isActive, disable, content, handleClick } = this.props;
        return (
            <dd className={`search-tab-list-item`}>
                <button
                    onClick={disable || isActive ? null : handleClick}
                    className={`${isActive ? "search-tab-pane-active" : ""} ${disable ? "search-tab-pane-disable" : ""} search-tab-list-item-btn`}
                >{content}</button>
            </dd>
        );
    }
}

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
                <div className={`search-tab-list-item-second clearfix`} key={j}>
                    <button
                        className={`${active ? "search-tab-pane-active" : ""} ${totalDisable ? "search-tab-pane-disable" : ""} search-tab-list-second-title`}
                        onClick={totalDisable || active ? null : () => handleClick(classify)}
                    >{optItem.total}</button>
                    <span className={`search-tab-list-second-border`}>(</span>
                    {
                        OptsEle(classify, keyword, filterTabList, handleClick)
                    }
                    <span className={`search-tab-list-second-border`}>)</span>
                </div>
            )
        }

        return (
            <SearchTabPane
                isActive={keyword === optItem ? (true) : (false)}
                disable={filterTabList.includes(optItem) ? (false) : (true)}
                content={optItem}
                handleClick={() => handleClick(optItem)}
                key={j}
            />
        );
    })
};

const makeSearchTabEle = (tabList) => {

    return (productList, keywords, setKeywords) => {

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

        return tabAttrs.map((item, i) => {

            const opts = tabList[item].filter,
                title = tabList[item].title,
                keyword = keywords[item],
                filterTabList = filterTab[item] || []
            ;
            const handleKeywords = (keyword) => setKeywords({ [item]:keyword });
            let ele = null;
            if (typeof opts === "object" && Array.isArray(opts)) {
                ele = OptsEle(opts, keyword, filterTabList, handleKeywords);
            }

            return (
                <dl className={`search-tab-list clearfix`} key={i}>
                    <dt className={`search-tab-list-title`}>{title}</dt>
                    <SearchTabPane
                        isActive={false}
                        disable={false}
                        content={`不限`}
                        handleClick={() => setKeywords({ [item]:null })}
                    />
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

    makeList = (productList, keywords, setKeywords) => makeSearchTabEle(this.props.searchList)(productList, keywords, setKeywords);

    render () {
        const { productList, keywords, setKeywords } = this.props;
        return (
            <div className={`search-tab`}>
                { this.makeList(productList, keywords, setKeywords) }
            </div>
        );
    }

}
