import { Box, Button, ButtonGroup, Flex, Image } from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitch';

import navList from '../lib/navList';

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
					{navList.map((link, i) => (
						<Button
							key={i}
							aria-label={link.title}
							variant='ghost'
							as='a'
							href={link.href}
							rounded={0}
						>
							{link.title}
						</Button>
					))}
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
