// components/ContactForm.tsx
import React from 'react';
import styles from './styles.module.scss';
import NavBar from '../components/navBar';
import TextInput from '../components/form/textInput';

const ContactForm: React.FC = () => {
	return (
		<div className={styles.container}>
			<NavBar />
			<main className={styles.main}>
				<div className={styles.formContainer}>
					<h1>Get in Touch</h1>
					<p>one step closer to discovering products</p>
					<form className={styles.form}>
						<TextInput name="Name" forName="name" required />
						<TextInput name="Surname" forName="surname" required />
						<TextInput
							name="Email"
							forName="email"
							inputType="email"
							required
						/>
						<TextInput name="Phone" forName="phone" inputType="tel" required />
						<TextInput
							name="Message"
							forName="message"
							inputType="tel"
							verticalTextInput
							required
						/>
						<textarea
							name="message"
							placeholder=""
							required
							className={styles.textarea}
						></textarea>
						<button type="submit" className={styles.button}>
							Send
						</button>
					</form>
				</div>
				<div className={styles.contactInfo}>
					<h2>Adress</h2>
					<address>
						Main Office & Factory
						<br />
						Istanbul | Türkiye
						<br />
						Craft Industrial Design
						<br />
						Başakşehir Mah
					</address>
					<h2>Contact</h2>
					<p>P: +90 0534 787 53334</p>
					<p>M: info@crafttasarim.com</p>
					<p>for Export</p>
					<p>help@crafttasarim.com</p>
				</div>
			</main>
		</div>
	);
};

export default ContactForm;
