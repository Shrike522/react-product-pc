import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
import {setUserStatus} from "../../../Layout/action";

const numReg = /^\d$/;

class List extends Component{

    constructor (props) {
        super(props);
    }

    handleClickToDetail = (id) => {

        const { history } = this.props;
        history.push(`/Detail/${id}`);

    };

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
        setMarketNum({ id, productNum: numReg.test(value) ? value : 1 });
    };

    handleDeleteMarket = (id) => {
        const { delMarket } = this.props;
        delMarket(id);
    };

    componentDidMount () {
        const { marketList, main, setUserStatus } = this.props, { userStatus } = main;
        let sessionMarketList = window.sessionStorage.getItem("marketList");
        if (sessionMarketList && marketList.length === 0) {
            sessionMarketList = JSON.parse(sessionMarketList);
            if (Array.isArray(sessionMarketList) && sessionMarketList.length>0) this.props.addMarket(sessionMarketList);
        }

        let sessionStorageUserStatus = window.sessionStorage.getItem("userStatus");
        if (sessionStorageUserStatus) {
            sessionStorageUserStatus = JSON.parse(sessionStorageUserStatus);
            if ((!userStatus || !userStatus.isLogin) && sessionStorageUserStatus.isLogin) {
                setUserStatus(sessionStorageUserStatus);
            }
        }
    }

    render () {

        const { marketList, main } = this.props, { userStatus } = main;

        return (
            <div className={`list-layout`}>
                <h2 className={`list-title`}>购物车</h2>
                <ul className={`list-ul`}>
                    {
                        marketList.map((item) => {
                            const { product, productNum } = item;
                            return (
                                <li className={`list-item clearfix`} key={`market-${product.id}`}>
                                    <img onClick={() => this.handleClickToDetail(product.id)} className={`list-item-img`} src={product.img[0]} alt={`购物车商品`} />
                                    <div className={`list-item-info`}>
                                        <h3 className={`list-item-info-title`}>{product.name}</h3>
                                        <p className={`list-item-info-content`}>型号: <span>{product.GPU}</span></p>
                                        <p className={`list-item-info-content`}>品牌: <span>{product.brand}</span></p>
                                        <p className={`list-item-info-content`}>内存: <span>{product.memoryType + " " + product.memorySize}</span></p>
                                        <div className={`list-item-info-num clearfix`}>
                                            <button onClick={() => this.handleClickChangeMarket("sub", product.id)} className={`list-item-info-num-btn`}>-</button>
                                            <input className={`list-item-info-num-input`} type="number" min={1} max={100} value={productNum} onChange={(e) => this.handleInputMarket(e, product.id)} />
                                            <button onClick={() => this.handleClickChangeMarket("add", product.id)} className={`list-item-info-num-btn`}>+</button>
                                        </div>
                                    </div>
                                    <div className={`list-item-active`}>
                                        <button onClick={userStatus.isLogin ? () => this.handleDeleteMarket(product.id) : null} className={`list-item-active-btn`}>{userStatus.isLogin ? "结算" : "登录后结算"}</button>
                                        <button onClick={() => this.handleDeleteMarket(product.id)} className={`list-item-active-btn`}>删除</button>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(List);
