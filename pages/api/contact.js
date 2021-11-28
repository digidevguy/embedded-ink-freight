import { sendContactEmail } from '../../middleware/mailer';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { name, address, email, phone, subject, body } = req.body;

		try {
			console.log('Sending');
			const response = await sendContactEmail(
				name,
				address,
				email,
				phone,
				subject,
				body
			);
			console.log(response);
			return res.status(201).json({ message: 'Message sent successfully!' });
		} catch {
			res.status(500).json({
				message: 'Unable to send messages at this time, please try again later',
			});
		}
	}
};

export default handler;
