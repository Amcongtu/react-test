import { useMemo, useState } from "react"
import CartSummary from "../CartSummary/CartSummary"
import CartTable from "../CartTable/CartTable"
import ShippingCalculator from "../ShippingCalculator/ShippingCalculator"
import styles from "./CartSection.module.scss"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import type { CartItem } from "../../../types/cart"
import { clearCart, updateCart } from "../../../store/features/cart/cartSlice"

const CartSection = () => {
    const data = useAppSelector(item => item.cart);
    const products = useMemo(() => data.items, [data.items]);
    const [cart, setCart] = useState<CartItem[]>(products)
    const dispatch = useAppDispatch();

    const clearCartAction = () => {
        dispatch(clearCart())
        setCart([])
    }

    const updateCartAction = () => {
        dispatch(updateCart(cart))
    }
    return <div className={`${styles.container} container`}>
        <div className={styles.cartPage}>
            <div className={styles.cardLeft}>
                <CartTable cart={cart} setCart={setCart} />
                <div className={styles.cartAction}>
                    <button className={`${styles.btn} ${styles.pink}`} onClick={updateCartAction}>Update Cart</button>
                    <button className={`${styles.btn} ${styles.pink}`} onClick={clearCartAction}>Clear Cart</button>
                </div>
            </div>
            <div className={styles.cardRight}>
                <CartSummary />
                <ShippingCalculator />
            </div>
        </div>
    </div>
}

export default CartSection