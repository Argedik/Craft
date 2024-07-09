import Link from 'next/link';
import Arrow from '../components/DirectionKeys';
import styles from './styles.module.scss';
import React from 'react';
import NavBar from '../components/navBar';

const Contact = () => {
	return (
		<div className={styles.container}>
			<NavBar />
			<main className={styles.main}>
				<div className={styles.overlay}>
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

export default Contact;
