import { memo } from "react"
import PageHeader from "../components/Pages/PageHeader/PageHeader"

const Blog = () => {
    return <>
        <PageHeader title="Blogs"
            breadcrumbs={["Home", "Blogs"]} />
        <div className="container" style={{
            paddingTop: "140px",
            paddingBottom: "140px",
            fontSize: "40px",
            fontWeight: 500
        }}>
            Blog
        </div>
    </>
}

export default memo(Blog)