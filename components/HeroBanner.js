import { Box } from '@chakra-ui/react';
import Image from 'next/image';

const HeroBanner = () => {
	return (
		<>
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
					backgroundColor='black'
					backgroundSize='cover'
					zIndex={1}
					opacity={0.6}
				></Box>
				<Image
					src='/images/esteban-zapata-f8Nb18iHdPo-unsplash.jpg'
					width={1920}
					height={1438}
					layout='responsive'
					priority
				/>
			</Box>
		</>
	);
};

export default HeroBanner;
