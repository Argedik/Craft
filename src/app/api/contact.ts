import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		return res
			.status(405)
			.json({ message: 'Yalnızca POST istekleri kabul edilir.' });
	}

	const { name, surname, email, phone, message } = req.body;

	try {
		// Veritabanına kaydet
		const mail = await prisma.mail.create({
			data: {
				name,
				surname,
				email,
				phone,
				message,
			},
		});

		// E-posta gönder
		let transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: 'gmail_adresiniz@gmail.com', // Kendi Gmail adresinizi ekleyin
				pass: 'gmail_sifreniz', // Gmail şifrenizi veya uygulama şifrenizi ekleyin
			},
		});

		let mailOptions = {
			from: '"Web Siteniz" <gmail_adresiniz@gmail.com>', // Gönderen adresi
			to: 'gedikas@hotmail.com', // Alıcı adresi
			subject: 'Yeni İletişim Formu Mesajı', // Konu
			html: `
        <h3>Yeni İletişim Formu Mesajı</h3>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Soyisim:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `,
		};

		await transporter.sendMail(mailOptions);

		res.status(200).json({ message: 'Mesaj başarıyla gönderildi.' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Bir hata oluştu.' });
	} finally {
		await prisma.$disconnect();
	}
}
