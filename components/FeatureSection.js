import { Stack } from '@chakra-ui/react';
import { FaHouseUser, FaMoneyBillWave, FaShippingFast } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const FeatureSection = ({ cardColor, color }) => {
	return (
		<Stack
			direction={['column', 'row']}
			justifyContent='space-evenly'
			p={[2, 0]}
		>
			<FeatureCard
				cardColor={cardColor}
				color={color}
				icon={FaHouseUser}
				title='Work Life Balance'
				subtext='Have your desired work week'
			/>
			<FeatureCard
				cardColor={cardColor}
				color={color}
				icon={FaMoneyBillWave}
				title='Competitive Pay'
				subtext='Multiple pay packages unique to fit your lifestyle'
			/>
			<FeatureCard
				cardColor={cardColor}
				color={color}
				icon={FaShippingFast}
				title='Driver Focused'
				subtext='Key involvement with preferred loads'
			/>
		</Stack>
	);
};

export default FeatureSection;
