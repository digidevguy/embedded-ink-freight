import { Flex, Heading, Text, VStack } from '@chakra-ui/react';
import ContactForm from './ContactForm';

const ContactSection = () => {
	return (
		<Flex
			bg='blue'
			color='white'
			p={[4, null, 0]}
			flexDirection={['column', null, 'row']}
			justifyContent='space-between'
			align='center'
		>
			<VStack w='50%'>
				<Heading>GET IN TOUCH</Heading>
				<Text>500 Terry Francois St San Francisco, CA 94158</Text>
				<Text>embeddedink22@gmail.com</Text>
				<Text>4698769438</Text>
			</VStack>
			<ContactForm />
		</Flex>
	);
};
export default ContactSection;
