import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	components: {
		Input: {
			variants: {
				contact: {
					backgroundColor: 'black',
					color: 'green',
				},
			},
		},
	},
});

export default theme;
