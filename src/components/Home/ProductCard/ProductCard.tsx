import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.scss';
import type { Product } from '../../../types/product';
import sale_tag from '../../../assets/images/sale_tag.svg';
import { motion } from 'framer-motion';
import { LuShoppingCart, LuHeart, } from "react-icons/lu";
import { LiaSearchPlusSolid } from "react-icons/lia";
import ProductImageModal from '../../Commons/ProductImageModal/ProductImageModal';
import { useDisclosure } from '../../../hooks/useDisclosure';

interface Props {
    product: Product;
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProductCard: React.FC<Props> = ({ product }) => {
    const { isOpen: isModalOpen, onClose: onModalClose, onOpen: onModalOpen } = useDisclosure();

    const stopLink = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <>
            <Link to={`/pages/${product.id}`} className={styles.cardLink}>
                <motion.div
                    className={styles.card}
                    variants={itemVariants}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    whileHover={{ y: -6, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.01)' }}
                >
                    {product.isOnSale && <img src={sale_tag} className={styles.saleBadge} alt="sale" />}

                    <div className={styles.iconContainer}>
                        <LuShoppingCart
                            onClick={stopLink}
                        />
                        <LuHeart
                            onClick={stopLink}
                        />
                        <LiaSearchPlusSolid
                            onClick={(e) => { stopLink(e); onModalOpen(); }}
                        />
                    </div>

                    <img src={product.image} alt={product.title} className={styles.image} />

                    <div className={styles.info}>
                        <p className={styles.title}>{product.title}</p>
                        <p className={styles.price}>
                            ${product.price.toFixed(2)}
                            {product.oldPrice && (
                                <span className={styles.oldPrice}>
                                    ${product.oldPrice.toFixed(2)}
                                </span>
                            )}
                        </p>
                    </div>
                </motion.div>
            </Link>

            <ProductImageModal
                isOpen={isModalOpen}
                image={product.image}
                onClose={onModalClose}
            />
        </>
    );
};

export default ProductCard;
