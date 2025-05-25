import React from 'react';
import styles from './ProductDetail.module.scss';
import type { Product } from '../../../types/product';

interface ProductDetailProps {
    product: Product
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <div className={`${styles.productDetail} container`} >
            <div className={styles.gallery}>
                <div className={styles.thumbnailList}>
                    {
                        product.images.map((img, index) => (
                            <img key={index} src={img} alt={`thumbnail-${index}`} />
                        ))}
                </div>
                < div className={styles.mainImage} >
                    <img src={product.images[0]} alt={product.title} />
                </div>
            </div>
            < div className={styles.info} >
                <h1>{product.title} </h1>
                < div className={styles.reviews} >
                    <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                    < span className={styles.reviewCount} > 11 </span>
                </div>
                < div className={styles.price} >
                    <span className={styles.newPrice}> ${product.price.toFixed(2)} </span>
                    {
                        product.oldPrice && (
                            <span className={styles.oldPrice}> ${product.oldPrice.toFixed(2)} </span>
                        )
                    }
                </div>
                < div className={styles.color} > Color </div>
                < button className={styles.addToCart} > Add To Cart </button>
                < div className={styles.meta} >
                    <div><strong>Categories: </strong> Bags</div >
                    <div><strong>Tags: </strong> New, Fashion</div >
                    <div><strong>Share: </strong> 🔵 🟣 🔴</div >
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
