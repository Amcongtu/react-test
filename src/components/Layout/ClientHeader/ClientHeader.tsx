import { useState } from "react";
import styles from "./ClientHeader.module.scss";
import { FaEnvelope, FaPhone, FaUser, FaHeart, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import Sidebar from "../ClientSideBar/ClientSideBar";
import SearchModal from "../SearchModal/SearchModal";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { useLocation } from "react-router-dom";
import routes from "../../../routes";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { selectCartTotalQuantity } from "../../../store/features/cart/cartSlice";

const Header = () => {
    const location = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const totalQuantity = useAppSelector(selectCartTotalQuantity);
    const { isOpen: isOpenSearchModal, onClose: onCloseSearchModal, onToggle: onToggleSeachModal } = useDisclosure();

    const mainLayout = routes.find(r => r.key === "main-layout");
    const navItems = mainLayout?.children?.filter(route => route.name).filter(item => item.isNavBar);

    const getFullPath = (path?: string) => {
        if (!path) return "/";
        return `/${path}`;
    };
    return (
        <>
            <header className={styles.header}>
                {/* Top Header */}
                <div className={styles.topbarContainer}>
                    <div className={`${styles.topbar} container`}>
                        <div className={styles.left}>
                            <FaEnvelope />
                            <span>mhhasanul@gmail.com</span>
                            <FaPhone />
                            <span>(12345)67890</span>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <span>English ▾</span>
                                <span>USD ▾</span>
                                <div>
                                    <span>Login</span>
                                    <FaUser />
                                </div>
                                <div>
                                    <span>Wishlist</span>
                                    <FaHeart />
                                </div>
                            </div>
                            <div className={styles.cartIcon}>
                                <FaShoppingCart />
                                {totalQuantity > 0 && (
                                    <span className={styles.cartBadge}>{totalQuantity}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Header */}
                <div className={`${styles.mainHeaderContainer}`}>
                    <div className={`${styles.mainHeader} container`}>
                        <div className={styles.left}>
                            <div className={styles.barIconLogoContainer}>
                                <div className={styles.barIcon} onClick={() => setSidebarOpen(!isSidebarOpen)}><FaBars /></div>
                                <div className={styles.logo}>
                                    <h1>Hekto</h1>
                                </div>
                                <div className={styles.barIconLogoContainerRight}>
                                    <FaSearch onClick={onToggleSeachModal} />
                                    <FaUser />
                                    <div className={styles.cartIconSmallScreen}>
                                        <FaShoppingCart />
                                        {totalQuantity > 0 && (
                                            <span className={styles.cartBadge}>{totalQuantity}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <nav className={styles.nav}>
                                <ul>
                                    {navItems?.map(item => {
                                        const fullPath = getFullPath(item.path);
                                        const isActive = location.pathname === fullPath;

                                        return (
                                            <li
                                                key={item.key}
                                                className={isActive ? styles.active : ""}
                                            >
                                                <Link to={fullPath}>{item.name} {isActive && '▾'}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        </div>

                        <div className={styles.search}>
                            <input type="text" placeholder="Search" />
                            <button>
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div >
            </header>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            <SearchModal isOpen={isOpenSearchModal} onClose={onCloseSearchModal} />
        </>
    );
};

export default Header;
