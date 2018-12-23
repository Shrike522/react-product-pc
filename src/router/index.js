import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import BundleLoader from './bundleLoader';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import List from '../pages/List';
import Login from '../pages/Login';
import User from '../pages/User';

// 根据routes配置文件生成路由组件树(内部按需加载处理)
const makeRouterTree = (routes) => {
    return routes.map((item) => {
        const { children, component, path } = item;

        // 按需加载
        item.component = (props) => (
            <BundleLoader load={() => import(`../pages/${component}`)}>
                {(Container) => <Container {...props} />}
            </BundleLoader>
        );

        if (children && Array.isArray(children) && children.length>0){
            delete item.children;
            return (
                <Route key={`RouteChildren-${path}`} {...item}>
                    { makeRouterTree(children) }
                </Route>
            );
        }

        return (
            <Route key={`Route-${path}`} {...item} />
        );
    });
};

// 路由配置文件
const routes = [
    {
        path: "/", // 路由路径
        component: "Home", // 文件路径( 'src/pages/${Path}' )
        exact: true
    },
    {
        path: "/detail",
        component: "Detail"
    },
    {
        path: "/list",
        component: "List"
    },
    {
        path: "/login",
        component: "Login"
    },
    {
        path: "/user",
        component: "User"
    },
];

const RouterTree = () => {
    return (
        <BrowserRouter>
            <div>
                {/*{*/}
                    {/*makeRouterTree(routes)*/}
                {/*}*/}
                <Route component={Home} path={"/"} exact={true}/>
                <Route component={Detail} path={"/Detail"}/>
                <Route component={List} path={"/List"}/>
                <Route component={Login} path={"/Login"}/>
                <Route component={User} path={"/User"}/>
            </div>
        </BrowserRouter>
    );
};

export default RouterTree;
