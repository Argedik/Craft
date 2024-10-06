'use client';

// components/ContactForm.tsx
import React, { useState } from 'react';
import styles from './styles.module.scss';
import NavBar from '../components/navBar';
import TextInput from '../components/form/textInput';
import Button from '../components/buttons';

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			alert('Mesajınız başarıyla gönderildi.');
			setFormData({
				name: '',
				surname: '',
				email: '',
				phone: '',
				message: '',
			});
		} else {
			alert('Mesaj gönderilirken bir hata oluştu.');
		}
	};

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
						<form className={styles.form} onSubmit={handleSubmit}>
							<TextInput
								name="Name"
								forName="name"
								required
								value={formData.name}
								onChange={handleChange}
							/>
							<TextInput
								name="Surname"
								forName="surname"
								required
								value={formData.surname}
								onChange={handleChange}
							/>
							<TextInput
								name="Email"
								forName="email"
								inputType="email"
								required
								value={formData.email}
								onChange={handleChange}
							/>
							<TextInput
								name="Phone"
								forName="phone"
								inputType="tel"
								value={formData.phone}
								onChange={handleChange}
							/>
							<TextInput
								name="Message"
								forName="message"
								inputType="message"
								verticalTextInput
								className={styles.textarea}
								value={formData.message}
								onChange={handleChange}
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
