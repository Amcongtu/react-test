import styles from "./ShippingCalculator.module.scss"

export default function ShippingCalculator() {
    return (
        <div className={`${styles.shippingCalculator} ${styles.card}`}>
            <h3>Calculate Shopping</h3>
            <div>
                <input type="text" placeholder="Bangladesh" />
                <input type="text" placeholder="Mirpur Dhaka - 1200" />
                <input type="text" placeholder="Postal Code" />
                <button className={`${styles.btn} ${styles.pink}`}>Calculate Shipping</button>
            </div>
        </div>
    );
}
