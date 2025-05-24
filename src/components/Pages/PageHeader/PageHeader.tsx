import styles from "./PageHeader.module.scss"

interface PageHeaderProps {
    title: string;
    breadcrumbs: string[];
}

const PageHeader = ({ title, breadcrumbs }: PageHeaderProps) => {
    return (
        <div className={styles.pageHeader}>
            <div className="container">
                <h1>{title}</h1>
                <p>
                    {breadcrumbs.map((item, index) => (
                        <span key={index}>
                            {item}
                            {index < breadcrumbs.length - 1 && " > "}
                        </span>
                    ))}
                </p>

            </div>
        </div>
    );
};

export default PageHeader;
