// components/ContactForm.tsx
import React from 'react';
import styles from './styles.module.scss';
import NavBar from '../components/navBar';

const ContactForm: React.FC = () => {
	return (
		<div className={styles.container}>
			<NavBar />
			<main className={styles.main}>
				<div className={styles.formContainer}>
					<h1>Get in Touch</h1>
					<p>one step closer to discovering products</p>
					<form className={styles.form}>
						<input
							type="text"
							name="name"
							placeholder="Name"
							required
							className={styles.input}
						/>
						<input
							type="text"
							name="surname"
							placeholder="Surname"
							required
							className={styles.input}
						/>
						<input
							type="email"
							name="email"
							placeholder="E-Mail"
							required
							className={styles.input}
						/>
						<input
							type="tel"
							name="phone"
							placeholder="Phone"
							required
							className={styles.input}
						/>
						<textarea
							name="message"
							placeholder="Message"
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
