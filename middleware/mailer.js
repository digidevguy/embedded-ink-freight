import nodemailer from 'nodemailer';

const sendEmail = (mail) => {
	return new Promise((res, rej) => {
		let transporter = nodemailer.createTransport({
			host: 'mail.embeddedinkfreight.com',
			secure: false,
			port: 587,
			auth: {
				user: process.env.EMAIL_ADDRESS,
				pass: process.env.EMAIL_PW,
			},
			tls: {
				rejectUnauthorized: false,
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

export function sendContactEmail(name, email, phone, body) {
	const mail = {
		from: process.env.EMAIL_ADDRESS,
		to: process.env.CONTACT_DESTINATION,
		subject: 'New Contact Message',
		html: `
        <h2>You have a new Contact Message!</h2>
        <p>Name: ${name}</p>       
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <hr />
        <p>${body}</p>
        `,
	};

	return sendEmail(mail);
}
