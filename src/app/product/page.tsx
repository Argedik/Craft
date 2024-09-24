'use client';

import Link from 'next/link';
import Arrow from '../components/DirectionKeys';
import styles from './styles.module.scss';
import React from 'react';
import NavBar from '../components/navBar';
import Button from '../components/buttons';
import ProductTitle from '../components/product/productTitle';

const Product = () => {
	function hundleClick() {
		console.log('test');
	}
	return (
		<div className={styles.container}>
			<NavBar noImage />
			<main className={`productPage ${styles.productPage}`}>
				<div className={styles.productContainer}>
					<div className={styles.product} onClick={() => hundleClick()}>
						<ProductTitle text="AIR WIPES" />
						<img
							src="/Rectangle17.png"
							alt="Air Wipes"
							className={styles.productImage}
						/>
					</div>
					<div className={styles.product}>
						<ProductTitle text="BLADES" />
						<img
							src="/Rectangle18.png"
							alt="Blades"
							className={styles.productImage}
						/>
					</div>
					<div className={styles.product}>
						<ProductTitle text="STANDS" />
						<img
							src="/Rectangle19.png"
							alt="Stands"
							className={styles.productImage}
						/>
					</div>
					<div className={styles.product}>
						<ProductTitle text="WELDERS" />
						<img
							src="/Rectangle20.png"
							alt="Welders"
							className={styles.productImage}
						/>
					</div>
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
