import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import BundleLoader from './bundleLoader';

// 根据routes配置文件生成路由组件树(内部按需加载处理)
const makeRouterTree = (routes) => {
    return routes.map((item) => {
        const { children, component, path } = item;
        if (children && Array.isArray(children) && children.length>0){
            item.delete("children");
            return (
                <Route key={`RouteChildren-${path}`} {...item}>
                    { makeRouterTree(children) }
                </Route>
            );
        }

        // 按需加载
        item.component = (props) => (
            <BundleLoader load={() => import(`../pages/${component}`)}>
                {(Container) => <Container {...props} />}
            </BundleLoader>
        );

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
                {
                    makeRouterTree(routes)
                }
            </div>
        </BrowserRouter>
    );
};

export default RouterTree;
