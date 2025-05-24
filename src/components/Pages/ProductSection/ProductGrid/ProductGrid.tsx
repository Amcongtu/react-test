import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss"
import dummyProducts from "../../../../data/products.json"

const ProductGrid = () => {
    return (
        <section>
            <div className={styles.grid}>
                {dummyProducts.map((item, idx) => (
                    <ProductCard key={idx} {...item} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
