import { memo } from "react"
import ProductGrid from "./ProductGrid/ProductGrid"
import Filter from "./Filter/Filter"
import styles from "./ProductSection.module.scss"

const ProductSection = () => {
    return <div className={`${styles.productSection} container`}>
        <Filter />
        <ProductGrid />
    </div>
}

export default memo(ProductSection)