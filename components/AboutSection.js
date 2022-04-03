import Image from 'next/image';
import { Box, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';

const AboutSection = ({ color, backgroundColor }) => {
	return (
		<Stack
			direction={['column', null, 'row']}
			// alignItems='center'
			spacing={[null, null, 4]}
			py={[0, null, 4]}
		>
			<Box bg={backgroundColor} textAlign='center' maxW={['full', null, '50%']}>
				<VStack p={10}>
					<Heading color={color} id='about'>
						About
					</Heading>
					<Text color={color}>
						Embedded Ink LLC is a freight company started in 2022 for new or
						experienced drivers looking for a balanced home and work life with
						fair pay.
					</Text>
					<Heading color={color} id='about'>
						Vision
					</Heading>
					<Text color={color}>To create a space where everybody wins</Text>
					<Heading color={color} id='about'>
						Mission
					</Heading>
					<Text color={color}>
						To help freight thrive by building collaborative relationships for
						on time deliveries
					</Text>
					<Heading color={color} id='about'>
						Goals
					</Heading>
					<Text color={color}>
						Creating an open environment that promotes good business practices
						and employee employer relations.
					</Text>
				</VStack>
			</Box>
			<Center
				maxW={['full', null, '50%']}
				overflow='hidden'
				alignItems='center'
			>
				<Image
					src='/images/obi-onyeador-Irdm0-tevPc-unsplash (1).jpg'
					width={1920}
					height={1440}
				/>
			</Center>
		</Stack>
	);
};
export default AboutSection;
