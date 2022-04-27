import {
	Divider,
	Heading,
	ListItem,
	Stack,
	UnorderedList,
	VStack,
} from '@chakra-ui/react';
import ContactForm from './ContactForm';

const ContactSection = ({
	backgroundColor,
	color,
	inputBgColor,
	inputColor,
	formColor,
}) => {
	return (
		<Stack
			bg={backgroundColor}
			color={color}
			p={[4, null, 0]}
			flexDirection={['column', null, 'row']}
			justifyContent='space-evenly'
			align='center'
			spacing={4}
		>
			<VStack textAlign='center' spacing={4} p={[4, 0]}>
				<Heading as='h3' textTransform='uppercase'>
					Apply Now
				</Heading>
				<Divider w='60%' />
				<Heading as='h4' size='md'>
					Truck Driver Requirements
				</Heading>
				<UnorderedList textAlign='start'>
					<ListItem>At least 21 years old (DOT requirement).</ListItem>
					<ListItem>
						Valid commercial driver's license (CDL) issued by your state of
						residence.
					</ListItem>
				</UnorderedList>
			</VStack>
			<ContactForm
				inputBgColor={inputBgColor}
				inputColor={inputColor}
				formColor={formColor}
			/>
		</Stack>
	);
};
export default ContactSection;
