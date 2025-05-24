import { memo } from "react"
import styles from "./Filter.module.scss"
import { IoGrid, IoList } from "react-icons/io5";

const Filter = () => {
    return <section className={styles.filter}>
        <div>
            <h2>
                Ecommerce Acceories & Fashion item
            </h2>
            <span>
                About 9,620 results (0.62 seconds)
            </span>
        </div>
        <div>
            <div className={styles.toolbar}>
                <div className={styles.item}>
                    <label htmlFor="perPage">Per Page:</label>
                    <input className={styles.perPage} id="perPage" type="number" min={1} defaultValue={8} />
                </div>

                <div className={styles.item}>
                    <label htmlFor="sortBy">Sort By:</label>
                    <select className={styles.sortBy} id="sortBy">
                        <option value="best-match">Best Match</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>

                <div className={`${styles.item} ${styles.view}`}>
                    <label>View:</label>
                    <div className={styles.buttonContainer}>
                        <button className={styles.iconButton} title="Grid View">
                            <IoGrid />
                        </button>
                        <button className={styles.iconButton} title="List View">
                            <IoList />
                        </button>
                    </div>
                </div>

                <div className={styles.item}>
                    <input type="text" className={styles.search} placeholder="Search..." />
                </div>
            </div>
        </div>
    </section>
}

export default memo(Filter)