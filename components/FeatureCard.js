import { Flex, Heading, Icon, VStack, Text } from '@chakra-ui/react';

const FeatureCard = ({ cardColor, color, icon, title, subtext }) => {
	return (
		<VStack
			p={6}
			bg={cardColor}
			color={color}
			boxShadow={['none', 'sm']}
			w={['full', '30%']}
		>
			<Icon as={icon} boxSize='12' />
			<Heading as='h3' size='md'>
				{title}
			</Heading>
			<Text>{subtext}</Text>
		</VStack>
	);
};

export default FeatureCard;
