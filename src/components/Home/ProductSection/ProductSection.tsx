import React, { useState, useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductSection.module.scss';
import type { Product } from '../../../types/product';
import { AnimatePresence, motion, useInView } from 'framer-motion';

interface Props {
    title: string;
    products: Product[];
}

const TABS = [
    { label: 'New Arrival', key: 'new_arrival' },
    { label: 'Best Seller', key: 'best_seller' },
    { label: 'Featured', key: 'featured' },
    { label: 'Special Offer', key: 'special_offer' },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const ProductSection: React.FC<Props> = ({ title, products }) => {
    const [activeTab, setActiveTab] = useState('new_arrival');
    const [visibleCount, setVisibleCount] = useState(6);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const filteredProducts = products.filter((product) =>
        product.tags.includes(activeTab)
    );

    const displayedProducts = filteredProducts.slice(0, visibleCount);

    const handleMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <section className={styles.section} ref={sectionRef}>
            <h2 className={styles.heading}>{title}</h2>

            <div className={styles.tabs}>
                {TABS.map((tab) => (
                    <span
                        key={tab.key}
                        className={activeTab === tab.key ? styles.activeTab : ''}
                        onClick={() => {
                            setActiveTab(tab.key);
                            setVisibleCount(6);
                        }}
                    >
                        {tab.label}
                    </span>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'show' : 'hidden'}
                >
                    {displayedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            </AnimatePresence>

            {filteredProducts.length > visibleCount && (
                <div className={styles.more}>
                    <button onClick={handleMore}>More...</button>
                </div>
            )}
        </section>
    );
};

export default ProductSection;
