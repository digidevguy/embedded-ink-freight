import { Divider, Flex, Heading, List, Stack } from '@chakra-ui/react';

import FaqItem from './FaqItem';

const FaqSection = ({ bgColor, color }) => {
	return (
		<Flex
			p={6}
			bg={bgColor}
			color={color}
			flexDirection='column'
			maxW={['full', '50%']}
			m={['none', 'auto']}
			gap='1rem'
		>
			<Heading as='h2' size='lg' id='faq'>
				Frequently Asked Questions
			</Heading>
			<Divider />
			<List>
				<FaqItem
					question='Can I lease on to your authority?'
					answer='Yes, terms are negotiable'
				/>
				<FaqItem
					question='Do you offer insurance?'
					answer='Benefits available for employees'
				/>
				<FaqItem
					question='What routes are available?'
					answer='OTR, Local, and Regional'
				/>
				<FaqItem
					question='What are the dispatch options?'
					answer='Self-dispatch or use our dispatcher'
				/>
			</List>
		</Flex>
	);
};

export default FaqSection;
