import { memo } from "react"
import styles from "./Filter.module.scss"
import { IoGrid, IoList } from "react-icons/io5"
import { setPerPage, setSortBy, setSearch, setView } from "../../../../store/features/pages/pagesSlice"
import { useAppDispatch, useAppSelector } from "../../../../store/hooks"

const Filter = () => {
    const dispatch = useAppDispatch()
    const { perPage, sortBy, search, view } = useAppSelector(state => state.pages)

    return (
        <section className={styles.filter}>
            <div>
                <h2>Ecommerce Acceories & Fashion item</h2>
                <span>About 9,620 results (0.62 seconds)</span>
            </div>
            <div>
                <div className={styles.toolbar}>
                    <div className={styles.item}>
                        <label htmlFor="perPage">Per Page:</label>
                        <input
                            className={styles.perPage}
                            id="perPage"
                            type="number"
                            min={1}
                            value={perPage}
                            onChange={(e) => dispatch(setPerPage(Number(e.target.value)))}
                        />
                    </div>

                    <div className={styles.item}>
                        <label htmlFor="sortBy">Sort By:</label>
                        <select
                            className={styles.sortBy}
                            id="sortBy"
                            value={sortBy}
                            onChange={(e) => dispatch(setSortBy(e.target.value as any))}
                        >
                            <option value="best-match">Best Match</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>

                    <div className={`${styles.item} ${styles.view}`}>
                        <label>View:</label>
                        <div className={styles.buttonContainer}>
                            <button
                                className={`${styles.iconButton} ${view == 'grid' && styles.active}`}
                                title="Grid View"
                                onClick={() => dispatch(setView('grid'))}
                            >
                                <IoGrid />
                            </button>
                            <button
                                className={`${styles.iconButton} ${view == 'list' && styles.active}`}
                                title="List View"
                                onClick={() => dispatch(setView('list'))}
                            >
                                <IoList />
                            </button>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <input
                            type="text"
                            className={styles.search}
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => dispatch(setSearch(e.target.value))}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Filter)
