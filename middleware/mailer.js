import nodemailer from 'nodemailer';

const sendEmail = (mail) => {
	return new Promise((res, rej) => {
		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			secure: true,
			port: 465,
			auth: {
				user: process.env.EMAIL_ADDRESS,
				pass: process.env.EMAIL_PW,
			},
		});

		transporter.sendMail(mail, (err, info) => {
			if (err) {
				console.log(err);
				rej(err);
			} else {
				res(info);
			}
		});
	});
};

export function sendContactEmail(name, address, email, phone, subject, body) {
	const mail = {
		from: process.env.EMAIL_ADDRESS,
		to: 'litmatthew85@gmail.com',
		subject: 'New Contact Message',
		html: `
        <h2>You have a new Contact Message!</h2>
        <p>Name: ${name}</p>
        <p>Address: ${address}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <hr />
        <h4>Subject: ${subject}</h4>
        <p>${body}</p>
        `,
	};

	return sendEmail(mail);
}
