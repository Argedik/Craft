import React from 'react';
import styles from './styles.module.scss';

interface ProductProps {
	text?: string;
}

const ProductTitle: React.FC<ProductProps> = ({ text }) => {
	return <div className={styles.productTitle}>{text}</div>;
};

export default ProductTitle;
