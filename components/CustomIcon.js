import { Icon } from '@chakra-ui/react'
import { iconMapper } from '@/assets/scripts/icons'

const CustomIcon = (props) => {
  const { icon } = props
  return <Icon as={iconMapper[icon]} {...props} />
}

export default CustomIcon
