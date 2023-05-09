import { extendTheme } from '@chakra-ui/react'
import styles from './styles'
import fonts from './fonts'

const overrides = {
  fonts,
  styles,
}

export default extendTheme(overrides)
