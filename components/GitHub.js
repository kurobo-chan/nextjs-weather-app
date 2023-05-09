import { Link } from '@chakra-ui/react'
import CustomIcon from './CustomIcon'

const Github = () => {
    return (
      <>
        <Link
          href="https://github.com/kurobo-chan/nextjs-weather-app"
          isExternal
        >
          <CustomIcon icon="github" boxSize={6} />
        </Link>
      </>
    )
}
export default Github