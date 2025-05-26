import styles from './ClientSideBar.module.scss';
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import routes from '../../../routes';

const Sidebar = ({ isOpen, onClose }: {
    isOpen: boolean,
    onClose: () => void
}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const layoutRoute = routes.find(route => route.path === "/");
    const menuItems = layoutRoute?.children?.filter(child => child.name && child.key && child.isNavBar) || [];

    const currentPath = location.pathname === "/" ? "" : location.pathname.replace(/^\//, "");
    const activeKey = menuItems.find(item =>
        (item.index && location.pathname === "/") ||
        (!item.index && currentPath.startsWith(item.path || ""))
    )?.key;

    return (
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`} onClick={onClose}></div>
            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <h2>Category</h2>
                    <FaTimes onClick={onClose} className={styles.closeIcon} />
                </div>
                <ul className={styles.menu}>
                    {menuItems.map((item) => (
                        <li
                            key={item.key}
                            className={classNames({ [styles.active]: item.key === activeKey })}
                            onClick={() => {
                                onClose();
                                if (item.index) {
                                    navigate("/");
                                } else {
                                    navigate(`/${item.path}`);
                                }
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
