import styles from "./ProductCard.module.scss"

interface ProductCardProps {
    title: string;
    image: string;
    price: number;
    salePrice?: number;
}

const ProductCard = ({ title, image, price, salePrice }: ProductCardProps) => {
    return (
        <div className={styles.prodcutCard}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>
                {salePrice ? (
                    <>
                        <span style={{ textDecoration: 'line-through', color: 'gray' }}>${price}</span>
                        <span style={{ color: 'red', marginLeft: '8px' }}>${salePrice}</span>
                    </>
                ) : (
                    <span>${price}</span>
                )}
            </p>
        </div>
    );
};

export default ProductCard;
