import { memo } from "react"
import PageHeader from "../components/Pages/PageHeader/PageHeader"
import ProductSection from "../components/Pages/ProductSection/ProductSection"
import { useInitializeFilterFromUrl } from "../hooks/Pages/useInitializeFilterFromUrl";

const Pages = () => {
    useInitializeFilterFromUrl();
    return <>
        <PageHeader title="Shop Grid Default"
            breadcrumbs={["Home", "Pages", "Shop Grid Default"]} />
        <ProductSection />
    </>
}

export default memo(Pages)