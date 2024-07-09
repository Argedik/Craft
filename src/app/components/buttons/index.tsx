import React from 'react';
import styles from './styles.module.scss';
interface ButtonProps {
	className?: string;
	text?: string;
	color?: 'black' | 'blue' | 'white';
}
const Button: React.FC<ButtonProps> = ({ className, text }) => {
	return <button className={styles.contactButton}>{text}</button>;
};

export default Button;
