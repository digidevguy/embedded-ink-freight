import { Link as ChakraLink, Text, VStack } from '@chakra-ui/react';

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
				<Text>©2022 Embedded Ink, LLC</Text>
				<Text>
					This website was built by{' '}
					<ChakraLink href='https://mattlittrell.dev'>
						Matthew Littrell
					</ChakraLink>
				</Text>
			</VStack>
		</>
	);
};

export default Footer;
