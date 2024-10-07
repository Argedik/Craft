'use client';

import styles from './styles.module.scss';
import React from 'react';
import NavBar from '../../components/navBar';
import Footer from '../footer';

const HomePage = () => {
	const handleLeftClick = () => {
		console.log('Left arrow clicked');
	};

	const handleRightClick = () => {
		console.log('Right arrow clicked');
	};
	return (
		<div className={styles.container}>
			<NavBar />
			<main className={styles.main}>
				<div className={styles.overlay}>
					{/* <Arrow direction="left" onClick={handleLeftClick} />
					<Arrow direction="right" onClick={handleRightClick} /> */}
					<h1 className={styles.title}>Welcome to Craft Industrial</h1>
					<p className={styles.subtitle}>
						Craft Industrial was established to manufacture and supply high
						quality machines and auxiliary equipment to industrial companies.
						You can trust Craft Industrial to deliver low-cost, durable and
						long-lasting solutions to meet the production demands of an
						ever-changing business environment.
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default HomePage;
