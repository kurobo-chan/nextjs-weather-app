import { Grid, Heading, Text, Flex, chakra } from '@chakra-ui/react'
import { ReactSVG } from 'react-svg'

const Display = ({ data }) => {
  const SvgStyle = chakra(ReactSVG)
  return (
    <>
      <Flex align="center">
        <SvgStyle
          src={`openweathermap/${data.weather[0].icon}.svg`}
          loading={() => <span>Loading</span>}
          fallback={() => <span>Error!</span>}
          beforeInjection={(svg) => {
            svg.classList.add('svgStyle')
            svg.setAttribute('style', 'width: 100%')
          }}
          width={[
            '150px', // 0-30em
            '150px', // 30em-48em
            '150px', // 48em-62em
            '100px', // 62em+
          ]}
        />
        <Grid gap="4">
          <Flex as="h2" alignItems="start" gap="4">
            <Text as="span" fontSize="5em" lineHeight="1" fontWeight="normal">
              {Math.round(data.main.temp)}
            </Text>
            <Text as="span" fontSize="4xl">
              <sup>o</sup>C
            </Text>
          </Flex>
          <Heading as="h2" fontWeight="bold" color="gray.600">
            {data.weather[0].main}
          </Heading>
        </Grid>
      </Flex>
    </>
  )
}
export default Display
