import styles from "./CartTable.module.scss";
import type { CartItem } from "../../../types/cart";

interface CartTableProps {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function CartTable({ cart, setCart }: CartTableProps) {

    const increaseQuantity = (id: string) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id: string) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    return (
        <div className={styles.cardTable}>
            <div className={`${styles.header} ${styles.row}`}>
                <div className={styles.textLeft}>Product</div>
                <div className={styles.textCenter}>Price</div>
                <div className={styles.textCenter}>Quantity</div>
                <div className={styles.textCenter}>Total</div>
            </div>
            {cart?.length == 0 && <div>No data</div>}
            {cart?.length > 0 && cart.map(item => (
                <div key={item.id} className={styles.row}>
                    <div className={styles.textLeft}>
                        <div className={styles.productInfo}>
                            <img src={item.images[0]} alt={item.title} />
                            <div>
                                <p>{item.title}</p>
                                <span>Color: 123</span><br />
                                <span>Size: S</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textCenter}>${item.price.toFixed(2)}</div>
                    <div className={styles.textCenter}>
                        <div className={styles.quantityControl}>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <input type="text" value={item.quantity} readOnly />
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                    </div>
                    <div className={styles.textCenter}>£{(item.quantity * Number(item.price)).toFixed(2)}</div>
                </div>
            ))}
        </div>
    );
}
