import React, { useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";
import type { Product } from "../../../../types/product";
import { AnimatePresence, motion, useInView } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.15, ease: "easeIn" },
    },
};

type ProductGridProps = {
    products: Product[];
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
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
                    {products.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            variants={itemVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                        >
                            <ProductCard {...item} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default ProductGrid;
