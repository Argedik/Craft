'use client';

import styles from './styles.module.scss';
import React from 'react';
import NavBar from '../components/navBar';
import Button from '../components/buttons';
import ProductTitle from '../components/product/productTitle';
import Link from 'next/link';

const products = [
	{
		id: 'air-wipes',
		name: 'AIR WIPES',
		image: '/Rectangle17.png',
	},
	{
		id: 'blades',
		name: 'BLADES',
		image: '/Rectangle18.png',
	},
	{
		id: 'stands',
		name: 'STANDS',
		image: '/Rectangle19.png',
	},
	{
		id: 'welders',
		name: 'WELDERS',
		image: '/Rectangle20.png',
	},
];

const Product = () => {
	return (
		<div className={styles.container}>
			<NavBar noImage />
			<main className={`productPage ${styles.productPage}`}>
				<div className={styles.productContainer}>
					{products.map((product) => (
						<Link
							href={`/product/${product.id}`}
							key={product.id}
							className={styles.product}
						>
							<ProductTitle text={product.name} />
							<img
								src={product.image}
								alt={product.name}
								className={styles.productImage}
							/>
						</Link>
					))}
				</div>
				<div className={styles.customMachines}>
					<Button text="CUSTOM MACHINES" />
					<div className={styles.customText}>
						Call to discuss, and receive a free quote.
					</div>
				</div>
			</main>
		</div>
	);
};

export default Product;
