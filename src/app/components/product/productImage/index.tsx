import React from 'react';
import styles from './styles.module.scss';

interface ProductProps {
	url: string;
	desc?: string;
	class?: string;
}

const ProductImage: React.FC<ProductProps> = ({ url }) => {
	return <div className={styles.ProductImage}>{url}</div>;
};

export default ProductImage;
