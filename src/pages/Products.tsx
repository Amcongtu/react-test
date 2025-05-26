import { memo } from "react"
import PageHeader from "../components/Pages/PageHeader/PageHeader"

const Products = () => {
    return <>
        <PageHeader title="Products"
            breadcrumbs={["Home", "Products"]} />
        <div className="container" style={{
            paddingTop: "140px",
            paddingBottom: "140px",
            fontSize: "40px",
            fontWeight: 500
        }}>
            Products
        </div>
    </>
}

export default memo(Products)