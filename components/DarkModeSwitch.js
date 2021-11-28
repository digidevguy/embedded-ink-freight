import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const iconColor = { light: 'black', dark: 'white' };

	return (
		<IconButton
			aria-label='Toggle dark mode'
			icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			onClick={toggleColorMode}
			color={iconColor[colorMode]}
			variant='ghost'
			borderRadius='full'
		/>
	);
};

export default DarkModeSwitch;
