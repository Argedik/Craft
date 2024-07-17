import React from 'react';
import { Interface } from 'readline';
import styles from './styles.module.scss';

interface textInputProps {
	name: string;
	style?: string;
	forName: string;
	inputType?: string;
	verticalTextInput?: boolean;
	[key: string]: any;
}
const TextInput: React.FC<textInputProps> = ({
	name,
	style,
	forName,
	inputType,
	verticalTextInput,
	...rest
}) => {
	return (
		<label className={styles.container} htmlFor={forName}>
			{verticalTextInput ? (
				<div className={styles.verticalTextInput}>
					<label
						className={`${style} ${styles.label} `}
						style={{
							justifyContent: 'center',
							width: '100%',
						}}
					>
						{name}
					</label>
					<textarea
						id={forName}
						name={forName}
						placeholder="........"
						className={`${styles.textarea} ${style}`}
						{...rest}
					/>
				</div>
			) : (
				<>
					<label className={`${style} ${styles.label} `}>{name}</label>
					<input
						id={forName}
						type={`${inputType ? inputType : 'text'}`}
						name={forName}
						placeholder="........"
						className={`${styles.input} ${style}`}
						{...rest}
					/>
				</>
			)}
		</label>
	);
};

export default TextInput;
