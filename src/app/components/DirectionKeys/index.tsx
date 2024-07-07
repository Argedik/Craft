import React from 'react';
import styles from './styles.module.scss';

interface ArrowProps {
	direction: 'left' | 'right';
	onClick: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
	return (
		<button
			className={`${styles.arrow} ${
				direction === 'left' ? styles.arrowLeft : styles.arrowRight
			}`}
			onClick={onClick}
		>
			<div className={styles.arrowInner}></div>
		</button>
	);
};

export default Arrow;
