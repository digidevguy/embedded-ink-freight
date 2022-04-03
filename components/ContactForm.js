import {
	Button,
	FormControl,
	FormLabel,
	Input,
	SimpleGrid,
	Textarea,
	useColorModeValue,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import ResizeTextArea from 'react-textarea-autosize';

const ContactForm = ({
	color,
	backgroundColor,
	inputBgColor,
	inputColor,
	formColor,
}) => {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [subject, setSubject] = useState('');
	const [body, setBody] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast();

	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	const handleAddressChange = (e) => {
		setAddress(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	};
	const handleSubjectChange = (e) => {
		setSubject(e.target.value);
	};
	const handleBodyChange = (e) => {
		setBody(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		const res = await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({ name, address, email, phone, subject, body }),
			headers: { 'Content-Type': 'application/json' },
		});
		const { message } = await res.json();

		if (res.ok) {
			setIsLoading(false);
			toast({ title: message, status: 'success', isClosable: true });
		} else {
			setIsLoading(false);
			toast({ title: message, status: 'error', isClosable: true });
		}
	};

	return (
		<VStack
			id='contact'
			as='form'
			p={10}
			backgroundColor={formColor}
			onSubmit={handleSubmit}
		>
			<FormControl id='name' isRequired>
				<FormLabel>Name</FormLabel>
				<Input
					placeholder='Enter your name'
					name='name'
					value={name}
					onChange={handleNameChange}
					rounded={0}
					backgroundColor={inputBgColor}
					color={inputColor}
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Address</FormLabel>
				<Input
					placeholder='Enter your address'
					value={address}
					name='address'
					rounded={0}
					onChange={handleAddressChange}
					backgroundColor={inputBgColor}
					color={inputColor}
				/>
			</FormControl>
			<SimpleGrid columns={2} spacing={2}>
				<FormControl isRequired>
					<FormLabel>Email</FormLabel>
					<Input
						placeholder='Enter your email'
						value={email}
						name='email'
						rounded={0}
						onChange={handleEmailChange}
						backgroundColor={inputBgColor}
						color={inputColor}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Phone</FormLabel>
					<Input
						placeholder='Enter your number'
						rounded={0}
						value={phone}
						name='phone'
						onChange={handlePhoneChange}
						backgroundColor={inputBgColor}
						color={inputColor}
					/>
				</FormControl>
			</SimpleGrid>
			<FormControl>
				<FormLabel>Subject</FormLabel>
				<Input
					placeholder='Type the subject'
					rounded={0}
					value={subject}
					name='subject'
					onChange={handleSubjectChange}
					backgroundColor={inputBgColor}
					color={inputColor}
				/>
			</FormControl>
			<FormControl>
				<FormLabel>Message</FormLabel>
				<Textarea
					as={ResizeTextArea}
					minH='unset'
					resize='none'
					minRows={5}
					maxRows={10}
					placeholder='Type your message here...'
					rounded={0}
					value={body}
					name='body'
					onChange={handleBodyChange}
					backgroundColor={inputBgColor}
					color={inputColor}
				/>
			</FormControl>
			<Button
				color='black'
				// colorScheme='black'
				backgroundColor='white'
				rounded={0}
				type='submit'
				isLoading={isLoading}
				loadingText='Sending...'
			>
				Submit
			</Button>
		</VStack>
	);
};
export default ContactForm;
