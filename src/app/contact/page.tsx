// components/ContactForm.tsx
import React from 'react';
import styles from './styles.module.scss';
import NavBar from '../components/navBar';
import TextInput from '../components/form/textInput';
import Button from '../components/buttons';

const ContactForm: React.FC = () => {
	return (
		<div className={styles.container}>
			<NavBar noImage />
			<main className={styles.main}>
				<div className={styles.formContainer}>
					<div>
						<h1 style={{ color: '#01303B' }}>Get in Touch</h1>
						<p style={{ color: '#01303B' }}>
							one step closer to discovering products
						</p>
						<form className={styles.form}>
							<TextInput name="Name" forName="name" required />
							<TextInput name="Surname" forName="surname" required />
							<TextInput
								name="Email"
								forName="email"
								inputType="email"
								required
							/>
							<TextInput
								name="Phone"
								forName="phone"
								inputType="tel"
								required
							/>
							<TextInput
								name="Message"
								forName="message"
								inputType="tel"
								verticalTextInput
								required
								className={styles.textarea}
							/>
							<button type="submit" className={styles.contactButton}>
								Send
							</button>
						</form>
					</div>
					<div className={styles.contactInfo} style={{ color: '#01303B' }}>
						<div>
							<h2>Adress</h2>
							<address>
								Main Office & Factory
								<br />
								<b>Istanbul | Türkiye</b>
								<br />
								Craft Industrial Design
								<br />
								Başakşehir Mah
							</address>
						</div>
						<div>
							<h2>Contact</h2>
							<p>P: +90 0534 787 53334</p>
							<p>M: info@crafttasarim.com</p>
							<h4>for Export</h4>
							<p>help@crafttasarim.com</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ContactForm;
