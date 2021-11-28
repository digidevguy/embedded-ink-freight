import {
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Link,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';

const Footer = () => {
	return (
		<>
			<VStack
				bg='black'
				color='white'
				flexDirection='column'
				textAlign='center'
				py={4}
			>
				<Text>© 2021 Embedded Ink, LLC</Text>
				<Text>
					This website was built by{' '}
					<Link href='https://mattlittrell.dev'>Matthew Littrell</Link>
				</Text>
			</VStack>
		</>
	);
};

export default Footer;
