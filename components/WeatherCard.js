import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  chakra,
} from '@chakra-ui/react'
import { ReactSVG } from 'react-svg'
import { svgStyle } from './StyleComponents'

const WeatherCard = ({ data, dateTime, week, today }) => {
  const SvgStyle = chakra(ReactSVG)
  return (
    <>
      <Card
        variant="unstyled"
        size="sm"
        align="center"
        css={{
          padding: 'clamp(0.5em, 0.1479em + 1.5023vw, 1.5em)',
          height: 'clamp(10rem, 9.1197rem + 3.7559vw, 12.5rem)',
        }}
      >
        <CardHeader>
          <Heading as="h3" fontSize="clamp(1.125em, 0.993em + 0.5634vw, 1.5em)">
            {dateTime}
          </Heading>
        </CardHeader>
        <CardBody>
          <SvgStyle
            src={`openweathermap/${data.weather[0].icon}.svg`}
            loading={() => <span>Loading</span>}
            fallback={() => <span>Error!</span>}
            beforeInjection={(svg) => {
              svg.classList.add('svgStyle')
            }}
            css={svgStyle}
          />
        </CardBody>
        <CardFooter>
          {data === today ? (
            <Text>
              <span>{Math.round(data.temp)}</span>
              <span>
                <sup>o</sup>C
              </span>
            </Text>
          ) : data === week ? (
            <Text>
              <span>{Math.round(data.temp.max)}</span>
              <span>-</span>
              <span>{Math.round(data.temp.min)}</span>
              <span>
                <sup>o</sup>C
              </span>
            </Text>
          ) : null}
        </CardFooter>
      </Card>
    </>
  )
}
export default WeatherCard
