import React, { useState } from 'react';
import styles from './ProductDetail.module.scss';
import type { Product } from '../../../types/product';
import ProductImageModal from '../../Commons/ProductImageModal/ProductImageModal';
import { useDisclosure } from '../../../hooks/useDisclosure';
import { useAppDispatch } from '../../../store/hooks';
import { addToCart } from '../../../store/features/cart/cartSlice';
import { toast } from 'react-toastify';

interface ProductDetailProps {
    product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product.images[0]); // state to hold the main image
    const { isOpen: isModalOpen, onClose: onModalClose, onOpen: onModalOpen } = useDisclosure();
    const dispatch = useAppDispatch();

    return (
        <div className={`container ${styles.sectionContainer}`}>
            <div className={styles.productDetail}>
                {/* Image Gallery */}
                <div className={styles.gallery}>
                    <div className={styles.thumbnailList}>
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`thumbnail-${index}`}
                                onClick={() => setSelectedImage(img)}
                                className={img == selectedImage ? styles.activeThumbnail : ''}
                            />
                        ))}
                    </div>
                    <div onClick={onModalOpen} className={styles.mainImage}>
                        <img src={selectedImage} alt={product.title} />
                    </div>
                </div>

                {/* Product Info */}
                <div className={styles.info}>
                    <h1>{product.title}</h1>
                    <div className={styles.reviews}>
                        <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
                        <span className={styles.reviewCount}>11</span>
                    </div>
                    <div className={styles.price}>
                        <span className={styles.newPrice}>${product.price.toFixed(2)}</span>
                        {product.oldPrice && (
                            <span className={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>
                        )}
                    </div>
                    <div className={styles.color}>Color</div>
                    <button onClick={() => {
                        dispatch(addToCart({ ...product, quantity: 1 }));
                        toast.success('Added to cart successfully!');
                    }} className={styles.addToCart}>Add To Cart</button>
                    <div className={styles.meta}>
                        <div><strong>Categories: </strong>Bags</div>
                        <div><strong>Tags: </strong>New, Fashion</div>
                        <div><strong>Share: </strong>🔵 🟣 🔴</div>
                    </div>
                </div>
            </div>

            <ProductImageModal
                isOpen={isModalOpen}
                image={selectedImage}
                onClose={onModalClose}
            />
        </div>
    );
};

export default ProductDetail;
