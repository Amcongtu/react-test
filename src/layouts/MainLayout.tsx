import { memo } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Layout/ClientHeader/ClientHeader"
import ClientFooter from "../components/Layout/ClientFooter/ClientFooter"

const MainLayout = () => {
    return <>
        <Header />
        <main className="p-4">
            <Outlet />
        </main>
        <ClientFooter />
    </>
}

export default memo(MainLayout)