import { Flex, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { ImDiamonds } from 'react-icons/im';

const FaqItem = ({ question, answer }) => {
	return (
		<ListItem>
			<Flex align='center'>
				<ListIcon as={ImDiamonds} />
				<Text fontWeight='bold'>{question}</Text>
			</Flex>
			<Text pl={10} fontStyle='italic'>
				{answer}
			</Text>
		</ListItem>
	);
};

export default FaqItem;
