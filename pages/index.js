import Head from 'next/head';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';

import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>EMBEDDEDINK, LLC</title>
			</Head>
			<Flex flexDirection='column'>
				<Box position='relative'>
					<Box
						position='absolute'
						top='50%'
						left='50%'
						transform='translate(-50%, -50%)'
						zIndex={2}
					>
						<Image src='/images/Embedded-Ink.png' width={608} height={486} />
					</Box>
					<Box
						position='absolute'
						top='0'
						w='full'
						h='100%'
						// h='100'
						backgroundColor='black'
						backgroundSize='cover'
						zIndex={1}
						opacity={0.6}
					></Box>
					<Image
						src='/images/esteban-zapata-f8Nb18iHdPo-unsplash.jpg'
						width={1920}
						height={1438}
					/>
				</Box>
				{/* <Box backgroundColor='black'>
					
				</Box> */}
				<AboutSection backgroundColor='red' color='white' />
				<ContactSection
					backgroundColor='blue.400'
					color='white'
					inputBgColor='blue.600'
					inputColor='white'
					formColor='blue.500'
				/>
				<Footer />
			</Flex>
		</>
	);
}
