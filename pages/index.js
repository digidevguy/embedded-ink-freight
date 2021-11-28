import Head from 'next/head';
import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';

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
				<Box maxH='75vh' overflow='hidden'>
					<Image
						src='/images/esteban-zapata-f8Nb18iHdPo-unsplash.jpg'
						width={1920}
						height={1438}
					/>
				</Box>
				<AboutSection />
				<ContactSection />
				<Footer />
			</Flex>
		</>
	);
}
