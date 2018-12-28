
// 路由配置文件
export const routes = [
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