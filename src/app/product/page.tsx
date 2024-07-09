import Link from 'next/link';
import Arrow from '../components/DirectionKeys';
import styles from './styles.module.scss';
import React from 'react';
import NavBar from '../components/navBar';
import Button from '../components/buttons';

const Product = () => {
	return (
		<div className={styles.container}>
			<NavBar />
			<main className={styles.main}>
				<div className={styles.productContainer}>
					<div className={styles.product}>
						<div className={styles.productTitle}>AIR WIPES</div>
						<img
							src="/Rectangle17.png"
							alt="Air Wipes"
							className={styles.productImage}
						/>
					</div>
					<div className={styles.product}>
						<div className={styles.productTitle}>BLADES</div>
						<img
							src="/Rectangle18.png"
							alt="Blades"
							className={styles.productImage}
						/>
					</div>
					<div className={styles.product}>
						<div className={styles.productTitle}>STANDS</div>
						<img
							src="/Rectangle19.png"
							alt="Stands"
							className={styles.productImage}
						/>
					</div>
					<div className={styles.product}>
						<div className={styles.productTitle}>WELDERS</div>
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
