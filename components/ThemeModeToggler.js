import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { MoonIcon } from '@/assets/MoonIcon'
import { SunIcon } from '@/assets/SunIcon'

const ThemeModeToggler = (props) => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <IconButton
      fontSize="1.5em"
      variant="ghost"
      onClick={() => toggleColorMode()}
      icon={<SwitchIcon />}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent' }}
      style={{ boxShadow: 'none' }}
      {...props}
    />
  )
}

export default ThemeModeToggler
