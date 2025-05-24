import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

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
            },
            {
                path: "gioi-thieu",
                name: "Giới thiệu",
                key: "about",
                element: <Home />,
            },
            {
                path: "dich-vu",
                name: "Dịch vụ",
                key: "services",
                element: <Home />,
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
