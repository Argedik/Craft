import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface navBarProps {
	noImage?: boolean;
}

const NavBar: React.FC<navBarProps> = ({ noImage }) => {
	return (
		<>
			{noImage ? (
				''
			) : (
				<img
					src="/gear-close-up.png"
					alt="Background"
					className={styles.backgroundImage}
				/>
			)}
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
		</>
	);
};

export default NavBar;
