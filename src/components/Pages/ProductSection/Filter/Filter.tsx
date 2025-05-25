import { memo, useState, useEffect, useRef } from "react";
import styles from "./Filter.module.scss";
import { IoGrid, IoList } from "react-icons/io5";
import {
    setPerPage,
    setSortBy,
    setSearch,
    setView,
} from "../../../../store/features/pages/pagesSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useDebounce } from "../../../../hooks/useDebounce";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { SortOption } from "../../../../store/features/pages/page.enum";

const Filter = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Flag to run URL->Redux sync only once on mount
    const initialized = useRef(false);
    const { perPage, sortBy, search, view } = useAppSelector((state) => state.pages);

    // Get initial filter values from URL search parameters or use default values
    const initialSearch = searchParams.get("search") || search || "";
    const initialPerPage = Number(searchParams.get("perPage")) || 10; // default 10 if not present
    const initialSortBy = searchParams.get("sortBy") || "best-match"; // default value if not present

    // Get current filter state from Redux store

    // Initialize local searchTerm state with value from URL params on first render
    const [searchTerm, setSearchTerm] = useState(initialSearch);

    // Debounce searchTerm to limit how often the search action dispatches and URL updates
    const debouncedSearch = useDebounce(searchTerm, 300);

    // Run only once on mount: sync Redux store with URL params
    useEffect(() => {
        if (!initialized.current) {
            dispatch(setSearch(initialSearch));
            dispatch(setPerPage(initialPerPage));
            dispatch(setSortBy(initialSortBy as SortOption));
            initialized.current = true;
        }
    }, [dispatch, initialSearch, initialPerPage, initialSortBy]);

    // Update Redux search state and URL params when debounced searchTerm, perPage, or sortBy change
    useEffect(() => {
        // Only run after initialization to avoid overwriting URL on mount
        if (!initialized.current) return;

        dispatch(setSearch(debouncedSearch));

        const params = new URLSearchParams(location.search);

        if (debouncedSearch) {
            params.set("search", debouncedSearch);
        } else {
            params.delete("search");
        }

        if (perPage) {
            params.set("perPage", String(perPage));
        } else {
            params.delete("perPage");
        }

        if (sortBy) {
            params.set("sortBy", sortBy);
        } else {
            params.delete("sortBy");
        }

        navigate({ search: params.toString() }, { replace: true });
    }, [debouncedSearch, perPage, sortBy, dispatch, navigate]);

    return (
        <section className={styles.filter}>
            <div>
                <h2>Ecommerce Accessories & Fashion item</h2>
                <span>About 9,620 results (0.62 seconds)</span>
            </div>
            <div>
                <div className={styles.toolbar}>
                    {/* Per Page input */}
                    <div className={styles.item}>
                        <label htmlFor="perPage">Per Page:</label>
                        <input
                            className={styles.perPage}
                            id="perPage"
                            type="number"
                            min={1}
                            value={perPage}
                            onChange={(e) =>
                                dispatch(setPerPage(Number(e.target.value)))
                            }
                        />
                    </div>

                    {/* Sort By dropdown */}
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

                    {/* View toggle buttons */}
                    <div className={`${styles.item} ${styles.view}`}>
                        <label>View:</label>
                        <div className={styles.buttonContainer}>
                            <button
                                className={`${styles.iconButton} ${view === "grid" ? styles.active : ""}`}
                                title="Grid View"
                                onClick={() => dispatch(setView("grid"))}
                            >
                                <IoGrid />
                            </button>
                            <button
                                className={`${styles.iconButton} ${view === "list" ? styles.active : ""}`}
                                title="List View"
                                onClick={() => dispatch(setView("list"))}
                            >
                                <IoList />
                            </button>
                        </div>
                    </div>

                    {/* Search input */}
                    <div className={styles.item}>
                        <input
                            type="text"
                            className={styles.search}
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Filter);
