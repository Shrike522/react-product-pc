import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import LogoNav from '../component/logoNav';
import './index.scss';

import Home from '../pages/Home/route';
import List from '../pages/List/route';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import User from '../pages/User';

// 路由配置文件
const routes = [
    {
        path: "/", // 路由路径
        component: "pages/Home", // 文件路径( 'src/pages/${Path}' )
        exact: true
    },
    {
        path: "/detail",
        component: "pages/Detail"
    },
    {
        path: "/list",
        component: "pages/List"
    },
    {
        path: "/login",
        component: "pages/Login"
    },
    {
        path: "/user",
        component: "pages/User"
    },
];

// console.log(makeRouterTree(routes));

class RouterTree extends React.Component {

    render () {
        const { logoNav, userStatus, marketList, setUserStatus } = this.props;
        return (
            <BrowserRouter>
                <div className={`router-tree-box`}>
                    <Route component={Login} path={"/Login"}/>
                    <Route component={User} path={"/User"}/>
                    <div>
                        {
                            logoNav ?
                                <LogoNav
                                    userStatus={userStatus}
                                    marketList={marketList}
                                    setUserStatus={setUserStatus}
                                />
                                :
                                null
                        }
                        <Route component={Home} path={"/"} exact={true}/>
                        <Route component={List} path={"/List"}/>
                        <Route component={Detail} path={"/Detail/:id"}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

}

export default RouterTree;
