import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss"
import { motion } from 'framer-motion';
import { useDisclosure } from "../../../../hooks/useDisclosure";
import { useAppDispatch } from "../../../../store/hooks";
import { useState } from "react";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { addToCart } from "../../../../store/features/cart/cartSlice";
import { toast } from "react-toastify";
import type { Product } from "../../../../types/product";
import ProductImageModal from "../../../Commons/ProductImageModal/ProductImageModal";

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
type ProductCardProps = Product & {
    mode?: 'grid' | 'list';
};
const ProductCard = ({ mode = 'grid', ...product }: ProductCardProps) => {
    const { id, title, images, price, oldPrice } = product
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const dispatch = useAppDispatch();
    const { isOpen: isModalOpen, onClose: onModalClose, onOpen: onModalOpen } = useDisclosure();

    const stopLink = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };
    return (
        <>
            <Link to={`/pages/${id}`} className={`${styles.prodcutCard} ${styles[mode]}`}>
                <motion.div
                    variants={itemVariants}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                    whileHover={
                        mode === 'grid'
                            ? { y: -8, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.01)' }
                            : { boxShadow: '0 10px 20px rgba(0, 0, 0, 0.01)' }
                    }
                >
                    <img src={images[0]} alt={title} />
                    <div>
                        <div className={`${styles.iconContainer} ${styles.hidden}`}>
                            <div className={styles.iconWrapper}>
                                {isAddingToCart ? (
                                    <div className={styles.spinner} />
                                ) : (
                                    <LuShoppingCart
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();

                                            setIsAddingToCart(true);
                                            dispatch(addToCart({ ...product, quantity: 1 }));
                                            toast.success('Added to cart successfully!');
                                            setTimeout(() => setIsAddingToCart(false), 100);
                                        }}
                                        className={styles.icon}
                                    />
                                )}
                            </div>
                            <LuHeart
                                onClick={stopLink}
                            />
                            <LiaSearchPlusSolid
                                onClick={(e) => { stopLink(e); onModalOpen(); }}
                            />
                        </div>
                        <h3>{title}</h3>
                        <div className={styles.dotContainer}>
                            <div className={styles.yellowDot}></div>
                            <div className={styles.pinkDot}></div>
                            <div className={styles.puppleDot}></div>
                        </div>
                        <div>
                            <p className={styles.price}>
                                ${price.toFixed(2)}{' '}
                                {oldPrice && (
                                    <span className={styles.oldPrice}>
                                        ${(oldPrice).toFixed(2)}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className={`${styles.iconContainer}`}>
                            <div className={styles.iconWrapper}>
                                {isAddingToCart ? (
                                    <div className={styles.spinner} />
                                ) : (
                                    <LuShoppingCart
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();

                                            setIsAddingToCart(true);
                                            dispatch(addToCart({ ...product, quantity: 1 }));
                                            toast.success('Added to cart successfully!');
                                            setTimeout(() => setIsAddingToCart(false), 100);
                                        }}
                                        className={styles.icon}
                                    />
                                )}
                            </div>
                            <LuHeart
                                onClick={stopLink}
                            />
                            <LiaSearchPlusSolid
                                onClick={(e) => { stopLink(e); onModalOpen(); }}
                            />
                        </div>
                    </div>
                </motion.div >
            </Link>
            <ProductImageModal
                isOpen={isModalOpen}
                image={product.images[0]}
                onClose={onModalClose}
            />
        </>
    );
};

export default ProductCard;
