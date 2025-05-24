import React from 'react';
import styles from './ClientFooter.module.scss';

const ClientFooter: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                {/* Left column */}
                <div className={styles.column}>
                    <h2 className={styles.logo}>Hekto</h2>
                    <form className={styles.form}>
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className={styles.input}
                        />
                        <button type="submit" className={styles.button}>
                            Sign Up
                        </button>
                    </form>
                    <p className={styles.contact}>
                        Contact Info<br />
                        17 Princess Road, London, Greater London NW1 8JR, UK
                    </p>
                </div>

                {/* Categories */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Catagories</h3>
                    <ul className={styles.list}>
                        <li>Laptops & Computers</li>
                        <li>Cameras & Photography</li>
                        <li>Smart Phones & Tablets</li>
                        <li>Video Games & Consoles</li>
                        <li>Waterproof Headphones</li>
                    </ul>
                </div>

                {/* Customer Care */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Customer Care</h3>
                    <ul className={styles.list}>
                        <li>My Account</li>
                        <li>Discount</li>
                        <li>Returns</li>
                        <li>Orders History</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>

                {/* Pages */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Pages</h3>
                    <ul className={styles.list}>
                        <li>Blog</li>
                        <li>Browse the Shop</li>
                        <li>Category</li>
                        <li>Pre-Built Pages</li>
                        <li>Visual Composer Elements</li>
                        <li>WooCommerce Pages</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default ClientFooter;
