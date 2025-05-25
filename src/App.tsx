import { useRoutes } from "react-router-dom";
import routes from "./routes";
import NProgress from 'nprogress';
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
NProgress.configure({ showSpinner: false });

export default function App() {
  const element = useRoutes(routes);

  useEffect(() => {
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return <>
    {element}
    <ToastContainer position="top-right" autoClose={2000} />
  </>;
}
