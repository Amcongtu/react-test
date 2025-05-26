import { memo } from "react"
import PageHeader from "../components/Pages/PageHeader/PageHeader"

const Contact = () => {
    return <>
        <PageHeader title="Contact"
            breadcrumbs={["Home", "Contact"]} />
        <div className="container" style={{
            paddingTop: "140px",
            paddingBottom: "140px",
            fontSize: "40px",
            fontWeight: 500
        }}>
            Contact
        </div>
    </>
}

export default memo(Contact)