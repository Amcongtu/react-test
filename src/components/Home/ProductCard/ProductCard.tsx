import React from 'react';
import styles from './ProductCard.module.scss';
import type { Product } from '../../../types/product';
import sale_tag from "../../../assets/images/sale_tag.svg"

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className={styles.card}>
            {product.isOnSale && <img src={sale_tag} className={styles.saleBadge} />}
            <img src={product.image} alt={product.title} className={styles.image} />
            <div className={styles.info}>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.price}>
                    ${product.price.toFixed(2)}{' '}
                    {product.oldPrice && (
                        <span className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
