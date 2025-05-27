import { memo } from "react"
import ProductGrid from "./ProductGrid/ProductGrid"
import Filter from "./Filter/Filter"
import styles from "./ProductSection.module.scss"
import { useAppSelector } from "../../../store/hooks"
import type { Product } from "../../../types/product"
import { SortOptions, ViewModes } from "../../../store/features/pages/page.enum"
import dummyProducts from "../../../data/products.json"
import ProductList from "./ProductList/ProductList"

const ProductSection = () => {
    const pages = useAppSelector((state) => state.pages);

    const filteredProducts = (dummyProducts as Product[]).filter((product) =>
        product.title.toLowerCase().includes(pages.search.toLowerCase())
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (pages.sortBy) {
            case SortOptions.PriceLow:
                return a.price - b.price;
            case SortOptions.PriceHigh:
                return b.price - a.price;
            case SortOptions.NameAsc:
                return a.title.localeCompare(b.title);
            case SortOptions.NameDesc:
                return b.title.localeCompare(a.title);
            case SortOptions.BestMatch:
            default:
                return 0;
        }
    });

    const currentPage = pages.currentPage ?? 1;
    const perPage = pages.perPage ?? 9;

    const startIndex = (currentPage - 1) * perPage;
    const pagedProducts = sortedProducts.slice(startIndex, startIndex + perPage);

    return <div className={`${styles.productSection} container`}>
        <Filter />
        {pagedProducts?.length == 0 && <div>No data</div>}
        {
            pages?.view == ViewModes.Grid && <ProductGrid products={pagedProducts} />
        }
        {
            pages?.view == ViewModes.List && <ProductList products={pagedProducts} />
        }


    </div>
}

export default memo(ProductSection)