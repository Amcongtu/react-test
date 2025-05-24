import { memo } from "react"
import { PromotionalBanner } from "../components/Home/PromationalBanner/PromotionalBanner"
import ProductSection from "../components/Home/ProductSection/ProductSection";
import sampleProducts from "../data/products.json"

const Home = () => {
    return <>
        <PromotionalBanner />
        <div className="container">
            <ProductSection title="Latest Products" products={sampleProducts} />;

        </div>
    </>
}

export default memo(Home) 