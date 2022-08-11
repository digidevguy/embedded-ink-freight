import Head from 'next/head';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';

import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import FeatureSection from '../components/FeatureSection';
import FaqSection from '../components/FaqSection';

export default function Home() {
	return (
		<>
			<Head>
				<title>EMBEDDEDINK, LLC</title>
				<meta name='description' content='' />
				<meta
					name='google-site-verification'
					content='SRponPtAX2laWTcuoEB3ivrYvareAKkyhQADRoOBxgM'
				/>
			</Head>
			<Flex flexDirection='column' gap={[0, '1rem']}>
				<HeroBanner />
				<AboutSection backgroundColor='red' color='white' />
				<FeatureSection cardColor='blue.600' color='white' />
				<ContactSection
					backgroundColor='red'
					color='white'
					inputBgColor='red.400'
					inputColor='white'
					formColor='red'
				/>
				<FaqSection bgColor='blue.600' color='white' />
				<Footer />
			</Flex>
		</>
	);
}
