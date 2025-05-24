import { memo } from "react"
import PageHeader from "../components/Pages/PageHeader/PageHeader"

const Pages = () => {
    return <>
        <PageHeader title="Shop Grid Default"
            breadcrumbs={["Home", "Pages", "Shop Grid Default"]} />
    </>
}

export default memo(Pages)