import styles from "./ProductCard.module.scss"

interface ProductCardProps {
    id: string;
    title: string;
    images: string[];
    price: number;
    oldPrice?: number;
}

const ProductCard = ({ title, images, price, oldPrice }: ProductCardProps) => {
    return (
        <div className={styles.prodcutCard}>
            <img src={images[0]} alt={title} />
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
        </div>
    );
};

export default ProductCard;
