import Link from 'next/link';
import Arrow from '../components/DirectionKeys';
import styles from './styles.module.scss';
import React from 'react';

const Product = () => {
	return (
		<div className={styles.container}>
			<img
				src="/gear-close-up.png"
				alt="Background"
				className={styles.backgroundImage}
			/>
			<header className={styles.header}>
				<Link href="/" className={styles.navItem}>
					<img src="/logo.png" alt="Craft Industrial" className={styles.logo} />
				</Link>
				<nav className={styles.nav}>
					<Link href="/about" className={styles.navItem}>
						ABOUT US
					</Link>
					<Link href="/product" className={styles.navItem}>
						PRODUCT
					</Link>
					<Link href="/services" className={styles.navItem}>
						SERVICES
					</Link>
					<Link href="/contact" className={styles.navItem}>
						CONTACT
					</Link>
				</nav>
			</header>
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
					<button className={styles.customButton}>CUSTOM MACHINES</button>
					<div className={styles.customText}>
						Call to discuss, and receive a free quote.
					</div>
				</div>
			</main>
		</div>
	);
};

export default Product;
