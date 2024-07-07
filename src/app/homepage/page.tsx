'use client';

import Arrow from '../components/DirectionKeys';
import styles from './styles.module.scss';
import React from 'react';

export const HomePage = () => {
	const handleLeftClick = () => {
		// Left arrow click logic
		console.log('Left arrow clicked');
	};

	const handleRightClick = () => {
		// Right arrow click logic
		console.log('Right arrow clicked');
	};
	return (
		<div className={styles.container}>
			<img
				src="/gear-close-up.png"
				alt="Background"
				className={styles.backgroundImage}
			/>
			<header className={styles.header}>
				<img src="/logo.png" alt="Craft Industrial" className={styles.logo} />
				<nav className={styles.nav}>
					<a className={styles.navItem}>ABOUT US</a>
					<a className={styles.navItem}>PRODUCT</a>
					<a className={styles.navItem}>SERVICES</a>
					<a className={styles.navItem}>CONTACT</a>
				</nav>
			</header>
			<main className={styles.main}>
				<div className={styles.overlay}>
					<Arrow direction="left" onClick={handleLeftClick} />
					<Arrow direction="right" onClick={handleRightClick} />
					<h1 className={styles.title}>Welcome to Craft Industrial</h1>
					<p className={styles.subtitle}>
						Craf Industrial was established to manufacture and supply high
						quality machines and auxiliary equipment to industrial companies.
						You can trust Craft Industrial to deliver low-cost, durable and
						long-lasting solutions to meet the production demands of an
						ever-changing business environment.
					</p>
					<button className={styles.contactButton}>CONTACT NOW</button>
				</div>
			</main>
		</div>
	);
};
