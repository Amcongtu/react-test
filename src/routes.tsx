import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import PagesDetail from "./pages/PagesDetail";

const routes = [
    {
        path: "/",
        name: "HomeLayout",
        key: "main-layout",
        element: <MainLayout />,
        children: [
            {
                index: true,
                name: "Home",
                key: "home",
                element: <Home />,
                isNavBar: true,
            },
            {
                path: "pages",
                name: "Pages",
                key: "pages",
                element: <Pages />,
                isNavBar: true,
            },
            {
                path: "pages/:id",
                name: "PagesDetail",
                key: "pages-detail",
                element: <PagesDetail />,
                isNavBar: false,
            },
        ],
    },
    {
        path: "*",
        name: "NotFound",
        key: "not-found",
        element: <h1>Not Found</h1>,
    },
];

export default routes;

