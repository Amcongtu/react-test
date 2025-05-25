import React, { useRef, useState } from "react";
import styles from "./ProductImageModal.module.scss";

interface Props {
    isOpen: boolean;
    image: string;
    onClose: () => void;
}

const ProductImageModal: React.FC<Props> = ({ isOpen, image, onClose }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lensStyle, setLensStyle] = useState<React.CSSProperties>({});
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const isNearCloseBtn = x > rect.width - 150 && y < 150;
        if (isNearCloseBtn) {
            setIsHovering(false);
            return;
        }

        const lensSize = 200;

        setLensStyle({
            left: `${x - lensSize / 2}px`,
            top: `${y - lensSize / 2}px`,
            backgroundImage: `url(${image})`,
            backgroundSize: `${rect.width * 2}px ${rect.height * 2}px`,
            backgroundPosition: `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`,
            width: `${lensSize}px`,
            height: `${lensSize}px`,
        });

        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    if (!isOpen) return null;

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div
                    ref={containerRef}
                    className={styles.zoomWrapper}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img src={image} alt="Product" className={styles.image} />
                    {isHovering && <div className={styles.lens} style={lensStyle} />}
                </div>
                <button className={styles.closeBtn} onClick={onClose}>×</button>
            </div>
        </div>
    );
};

export default ProductImageModal;
