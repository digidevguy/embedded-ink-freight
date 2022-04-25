import { useRouter } from 'next/router';
import {
	Button,
	Drawer as ChakraDrawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Link as ChakraLink,
} from '@chakra-ui/react';
import navList from '../lib/navList';

const Drawer = ({ isOpen, onClose }) => {
	const router = useRouter();

	return (
		<ChakraDrawer isOpen={isOpen} placement='left' onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader>Embedded Ink Freight</DrawerHeader>
				<DrawerBody onClick={onClose}>
					{navList.map((link) => (
						<Button
							key={link.title}
							as={ChakraLink}
							aria-label={link.title}
							variant='ghost'
							w='full'
							href={link.href}
							// onClick={onClose}
						>
							{link.title}
						</Button>
					))}
				</DrawerBody>
			</DrawerContent>
		</ChakraDrawer>
	);
};

export default Drawer;
