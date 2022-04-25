import Image from 'next/image';
import {
	Box,
	Center,
	Divider,
	Flex,
	Heading,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';

const AboutSection = ({ color, backgroundColor }) => {
	return (
		<>
			<Flex flexDirection={['column', null, 'row']} gap={[0, '1rem']}>
				<VStack
					p={5}
					bg={backgroundColor}
					maxW={['full', null, '50%']}
					textAlign='center'
					justify='center'
				>
					<Heading color={color} id='about'>
						About Embedded Ink Freight
					</Heading>
					<Divider />
					<Text color={color} textAlign='start'>
						Embedded Ink LLC is a freight company started in 2022 for new or
						experienced drivers looking for a balanced home and work life with
						fair pay. Our primary focus is on personal growth with open terms
						that benefit everyone. Every employee is valued, proven with
						negotiations to their satisfaction. Our vision is to create a space
						where everybody wins.
					</Text>
				</VStack>
				<Center
					maxW={['full', null, '50%']}
					overflow='hidden'
					alignItems='center'
				>
					<Image
						src='/images/obi-onyeador-Irdm0-tevPc-unsplash.jpg'
						width={640}
						height={480}
					/>
				</Center>
			</Flex>
			<Flex flexDirection={['column-reverse', null, 'row']} gap={[0, '1rem']}>
				<Center
					maxW={['full', null, '50%']}
					overflow='hidden'
					alignItems='center'
				>
					<Image
						src='/images/small-josiah-farrow-ucuOscdCaO4-unsplash.jpg'
						width={640}
						height={427}
					/>
				</Center>
				<VStack
					p={5}
					bg={backgroundColor}
					maxW={['full', null, '50%']}
					textAlign='center'
					justify='center'
				>
					<Heading color={color}>Our Mission</Heading>
					<Divider />
					<Text color={color} textAlign='start'>
						To help freight thrive by building collaborative relationships for
						on time deliveries.
					</Text>
					<Text color={color} textAlign='start'>
						To create an open environment that promotes good business practices
						and employee employer relations.{' '}
					</Text>
				</VStack>
			</Flex>
		</>
	);
};
export default AboutSection;
