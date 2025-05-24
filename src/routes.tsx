import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
];

export default routes;
