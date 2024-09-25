import React from 'react';
import styles from './styles.module.scss';
interface ButtonProps {
	className?: string;
	text?: string;
	color?: 'black' | 'blue' | 'white';
}
const Button: React.FC<ButtonProps> = ({ className, text }) => {
	return (
		<button className={`${styles.contactButton} productButton `}>
			<p className={`${styles.buttonText}`}>CUSTOM MACHINES</p>
		</button>
	);
};
export default Button;
