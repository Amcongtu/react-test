import MainLayout from "./layouts/MainLayout";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import PagesDetail from "./pages/PagesDetail";
import Products from "./pages/Products";
import Shop from "./pages/Shop";

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
            {
                path: "cart",
                name: "Cart",
                key: "cart",
                element: <Cart />,
                isNavBar: false,
            },
            {
                path: "products",
                name: "Products",
                key: "Products",
                element: <Products />,
                isNavBar: true,
            },
            {
                path: "blog",
                name: "Blogs",
                key: "Blogs",
                element: <Blog />,
                isNavBar: true,
            },
            {
                path: "shop",
                name: "Shop",
                key: "Shop",
                element: <Shop />,
                isNavBar: true,
            },
            {
                path: "contact",
                name: "Contact",
                key: "Contact",
                element: <Contact />,
                isNavBar: true,
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

