import ThemeModeToggler from './ThemeModeToggler'
import { Heading } from '@chakra-ui/react'
import CustomIcon from './CustomIcon'
import { Flex, IconButton, Spacer } from '@chakra-ui/react'
import { ColumnMargin, RowMargin } from './StyleComponents'

const Header = () => {
  return (
    <>
      <RowMargin
        pt={`4em`}
        pb={`clamp(2.5em, 2.3239em + 0.7512vw, 3em)`}
        as={`header`}
      >
        <ColumnMargin>
          <Flex alignItems="center" gap="2">
            <Heading as="h1" size="2xl">
              Weather App
            </Heading>
            <Spacer />
            <Flex color={`gray.400`} alignItems="center">
              <ThemeModeToggler />
              <IconButton
                aria-label="My Github"
                bg={'none'}
                icon={<CustomIcon icon="github" boxSize={6} />}
              />
            </Flex>
          </Flex>
        </ColumnMargin>
      </RowMargin>
    </>
  )
}
export default Header
