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
		const existingMail = await prisma.mail.findFirst({
			where: {
				name,
				surname,
				email,
			},
		});

		if (existingMail) {
			return res.status(409).json({ message: 'Bu kişi zaten var.' });
		}

		const mail = await prisma.mail.create({
			data: {
				name,
				surname,
				email,
				phone,
				message,
			},
		});

		let transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});

		let mailOptions = {
			from: 'test343665@gmail.com',
			// to: 'tugaygundem@gmail.com', //Contact sayfasında doldurulan formun gönderileceği mail adresi
			to: 'gedikas@hotmail.com', //Contact sayfasında doldurulan formun gönderileceği mail adresi
			subject: 'Tugay hocam maillerimiz başladı. Hayırlı olsun :)',
			html: `
        <h3>Yeni müşteri potansiyeli mi diyelim ne yazalım hocam </h3>
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
