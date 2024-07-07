import Link from 'next/link';
import Arrow from '../components/DirectionKeys';
import styles from './styles.module.scss';
import React from 'react';

const About = () => {
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
				<div className={styles.overlay}>
					<h1 className={styles.title}>About Craft Industrial</h1>
					<p className={styles.subtitle}>
						Craft Industrial, headquartered in Istanbul, Turkey, is a new and
						dynamic formation in the production of machinery spare parts and
						machinery. We want to make a name for ourselves in the world with
						practical, innovative engineering and comprehensive in-house
						machining and assembly facilities that include the most up-to-date
						CNC turning, milling, drilling and automatic machining equipment.
						With its reliability and robust design, Craft Industrial wants to
						achieve its success as a result of practical, innovative
						engineering. Our mission Craft's mission is to develop, manufacture
						and market reliable, cost-effective industrial equipment. This
						mission is supported by our dedication and commitment to quality.
						Each employee at every level takes responsibility for the company's
						success by respecting and understanding each other's role and the
						impact this has on our customers. Our success depends on providing
						the best quality product at an affordable price to fully meet
						customers' expectations.
					</p>
					<button className={styles.contactButton}>CONTACT NOW</button>
				</div>
			</main>
		</div>
	);
};

export default About;
