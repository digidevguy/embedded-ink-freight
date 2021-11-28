import Image from 'next/image';
import { Box, Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';

const AboutSection = () => {
	return (
		<Stack
			direction={['column', null, 'row']}
			// alignItems='center'
			spacing={4}
			py={[0, null, 4]}
		>
			<Box bg='red' textAlign='center' maxW={['full', null, '50%']}>
				<VStack p={10}>
					<Heading color='white' id='about'>
						About
					</Heading>
					<Text color='white'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel
						orci porta non pulvinar. Eu lobortis elementum nibh tellus molestie
						nunc non blandit. Neque gravida in fermentum et sollicitudin ac orci
						phasellus. Ipsum dolor sit amet consectetur adipiscing elit ut
						aliquam purus.
					</Text>
					<Text color='white'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel
						orci porta non pulvinar. Eu lobortis elementum nibh tellus molestie
						nunc non blandit. Neque gravida in fermentum et sollicitudin ac orci
						phasellus. Ipsum dolor sit amet consectetur adipiscing elit ut
						aliquam purus. Nascetur ridiculus mus mauris vitae ultricies leo.
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
