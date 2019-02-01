import React, { Component, PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const numReg = /^\d$/;


class MarketListItem extends PureComponent {

    render () {
        const { id,
            img,
            name,
            GPU,
            brand,
            memoryType,
            memorySize,
            productNum,
            isLogin,
            handleClickToDetail,
            handleClickChangeMarket,
            handleDeleteMarket,
            handleInputMarket
        } = this.props;
        return (
            <li className={`list-item clearfix`}>
                <div className={`list-item-img-box`}>
                    <img onClick={() => handleClickToDetail(id)} className={`list-item-img`} src={img} alt={`购物车商品`} />
                </div>
                <div className={`list-item-info`}>
                    <h3 className={`list-item-info-title`}>{name}</h3>
                    <p className={`list-item-info-content`}>型号: <span>{GPU}</span></p>
                    <p className={`list-item-info-content`}>品牌: <span>{brand}</span></p>
                    <p className={`list-item-info-content`}>内存: <span>{memoryType + " " + memorySize}</span></p>
                    <div className={`list-item-info-num clearfix`}>
                        <button onClick={() => handleClickChangeMarket("sub", id)} className={`list-item-info-num-btn`}>-</button>
                        <input className={`list-item-info-num-input`} type="number" min={1} max={100} value={productNum} onChange={(e) => handleInputMarket(e, id)} />
                        <button onClick={() => handleClickChangeMarket("add", id)} className={`list-item-info-num-btn`}>+</button>
                    </div>
                </div>
                <div className={`list-item-active`}>
                    <button onClick={isLogin ? () => handleDeleteMarket(id) : null} className={`list-item-active-btn`}>{isLogin ? "结算" : "登录后结算"}</button>
                    <button onClick={() => handleDeleteMarket(id)} className={`list-item-active-btn`}>删除</button>
                </div>
            </li>
        );
    }

}

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
                                <MarketListItem
                                    key={`market-${product.id}`}
                                    id={product.id}
                                    img={product.img[0]}
                                    name={product.name}
                                    GPU={product.GPU}
                                    brand={product.brand}
                                    memoryType={product.memoryType}
                                    memorySize={product.memorySize}
                                    productNum={productNum}
                                    isLogin={userStatus.isLogin}
                                    handleClickToDetail={this.handleClickToDetail}
                                    handleClickChangeMarket={this.handleClickChangeMarket}
                                    handleDeleteMarket={this.handleDeleteMarket}
                                    handleInputMarket={this.handleInputMarket}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(List);
