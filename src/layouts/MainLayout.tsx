import { memo } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Layout/ClientHeader/ClientHeader"

const MainLayout = () => {
    return <>
        <Header />
        <main className="p-4">
            <Outlet />
        </main>
    </>
}

export default memo(MainLayout)