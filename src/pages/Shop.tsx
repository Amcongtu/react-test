import { memo } from "react"
import PageHeader from "../components/Pages/PageHeader/PageHeader"

const Shop = () => {
    return <>
        <PageHeader title="Shop"
            breadcrumbs={["Home", "Shop "]} />
        <div className="container" style={{
            paddingTop: "140px",
            paddingBottom: "140px",
            fontSize: "40px",
            fontWeight: 500
        }}>
            Shop
        </div>
    </>
}

export default memo(Shop)