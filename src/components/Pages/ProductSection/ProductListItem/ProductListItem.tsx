// components/ProductList/ProductListItem.tsx
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../../../types/product";

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

type ProductListItemProps = {
    product: Product;
};

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
    return (
        <motion.div
            layout
            variants={itemVariants}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <ProductCard {...product} mode="list" />
        </motion.div>
    );
};

export default ProductListItem;
