import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Icon,
	Image,
} from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitch';

const Layout = ({ children }) => {
	return (
		<>
			<Flex p={4} maxW='1200px' mx='auto' justifyContent='space-between'>
				{/* <Image src='/images/logo.png' boxSize='100px' /> */}
				<Heading size='md' my='auto'>
					EMBEDDEDINK LLC
				</Heading>
				<ButtonGroup>
					<Button variant='ghost' as='a' href='#about' rounded={0}>
						About
					</Button>
					<Button variant='ghost' as='a' href='#contact' rounded={0}>
						Contact
					</Button>
					<DarkModeSwitch />
				</ButtonGroup>
			</Flex>
			<Flex maxW='1200px' flexDirection='column' mx='auto'>
				{children}
			</Flex>
		</>
	);
};

export default Layout;
