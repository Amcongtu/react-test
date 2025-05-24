import { useState } from "react";
import styles from "./ClientHeader.module.scss";
import { FaEnvelope, FaPhone, FaUser, FaHeart, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import Sidebar from "../ClientSideBar/ClientSideBar";
import SearchModal from "../SearchModal/SearchModal";
import { useDisclosure } from "../../../hooks/useDisclosure";

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { isOpen: isOpenSearchModal, onOpen: onOpenSearchModal, onClose: onCloseSearchModal, onToggle: onToggleSeachModal } = useDisclosure();

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
                            <div>
                                <FaShoppingCart />
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
                                    <FaShoppingCart />
                                </div>
                            </div>
                            <nav className={styles.nav}>
                                <ul>
                                    <li className={styles.active}>Home ▾</li>
                                    <li>Pages</li>
                                    <li>Products</li>
                                    <li>Blog</li>
                                    <li>Shop</li>
                                    <li>Contact</li>
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
