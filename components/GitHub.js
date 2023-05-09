import { Link } from '@chakra-ui/react'
import CustomIcon from './CustomIcon'

const Github = () => {
  return (
    <>
      <Link
        href="https://github.com/kurobo-chan/nextjs-weather-app"
        isExternal
        w={`2.5em`}
        h={`2.5em`}
        style={{ display: 'grid', placeContent: 'center' }}
      >
        <CustomIcon icon="github" boxSize={6} />
      </Link>
    </>
  )
}
export default Github
