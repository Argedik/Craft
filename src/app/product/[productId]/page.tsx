import React from 'react';
import NavBar from '../../components/navBar';
import styles from './styles.module.scss';
import Link from 'next/link';
import Button from '../../components/buttons';

type Product = {
	id: string;
	name: string;
	image: string;
	description: string;
};

const products: Product[] = [
	{
		id: 'air-wipes',
		name: 'AIR WIPES',
		image: '/Rectangle17.png',
		description: 'Description for Air Wipes',
	},
	{
		id: 'blades',
		name: 'BLADES',
		image: '/Rectangle18.png',
		description: 'Description for Blades',
	},
	{
		id: 'stands',
		name: 'STANDS',
		image: '/Rectangle19.png',
		description: 'Description for Stands',
	},
	{
		id: 'welders',
		name: 'WELDERS',
		image: '/Rectangle20.png',
		description: 'Description for Welders',
	},
];

type ProductDetailProps = {
	params: {
		productId: string;
	};
};

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
	const { productId } = params;
	const product = products.find((p) => p.id === productId);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className={styles.container}>
			<NavBar noImage />
			<main className={styles.productDetailPage}>
				<div className={styles.productDetailContainer}>
					<div className={styles.productImageContainer}>
						<img
							src={product.image}
							alt={product.name}
							className={styles.productImage}
						/>
						<div className={styles.productTitle}>{product.name}</div>
					</div>
					<div className={styles.productDescription}>
						<p>{product.description}</p>
						<Button text="Contact Now" />
					</div>
				</div>
				<Link href="/product">
					<div className={styles.goToProductPage}>Go to product page</div>
				</Link>
			</main>
		</div>
	);
};

export default ProductDetail;
