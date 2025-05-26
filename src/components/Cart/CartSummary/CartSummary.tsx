import styles from "./CartSummary.module.scss"
import { FaCheckCircle } from "react-icons/fa";
export default function CartSummary() {
    return (
        <div className={`${styles.container}`}>
            <h3 className={styles.title}>Cart Totals</h3>
            <div className={`${styles.cardSummary}`}>
                <div className={styles.summaryLine}>
                    <span className={styles.label}>Subtotals:</span>
                    <span>£219.00</span>
                </div>
                <div className={styles.summaryLine}>
                    <span className={styles.label}>Totals:</span>
                    <span>£325.00</span>
                </div>
                <div className={`${styles.noteContainer} ${styles.green}`}>
                    <FaCheckCircle />
                    <p className={styles.note}>Shipping & taxes calculated at checkout</p>

                </div>
                <button className={`${styles.btn} ${styles.green}`}>Proceed To Checkout</button>
            </div>
        </div>
    );
}
