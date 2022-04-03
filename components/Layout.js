import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Icon,
	Image,
	Link,
} from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitch';

const Layout = ({ children }) => {
	return (
		<>
			<Flex
				p={4}
				maxW='1200px'
				mx='auto'
				justifyContent='space-between'
				alignItems='center'
			>
				<Image src='/images/icon-PNG.png' boxSize='5%' />
				{/* <Heading size='sm' my='auto'>
					EMBEDDEDINK LLC
				</Heading> */}

				<Box w='50%' h='50px'></Box>
				<ButtonGroup>
					<Button variant='ghost' as='a' href='#about' rounded={0}>
						About
					</Button>
					<Button variant='ghost' as='a' href='#contact' rounded={0}>
						Contact
					</Button>
					{/* <DarkModeSwitch /> */}
				</ButtonGroup>
			</Flex>
			<Flex maxW='1200px' flexDirection='column' mx='auto'>
				{children}
			</Flex>
		</>
	);
};

export default Layout;
