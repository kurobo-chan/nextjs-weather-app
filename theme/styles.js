import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.700', 'whiteAlpha.900')(props),
    },
  }),
}
export default styles
