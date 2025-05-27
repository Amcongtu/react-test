// components/ProductList/ProductList.tsx
import React, { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import type { Product } from "../../../../types/product";
import styles from "./ProductList.module.scss";
import ProductListItem from "../ProductListItem/ProductListItem";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

type ProductListProps = {
    products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section className={styles.section} ref={sectionRef}>
            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
            >
                <AnimatePresence mode="popLayout">
                    {products.map((product) => (
                        <ProductListItem key={product.id} product={product} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default ProductList;
