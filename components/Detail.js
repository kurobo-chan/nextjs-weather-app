import {
  Grid,
  GridItem,
  VisuallyHidden,
  Flex,
  Box,
  chakra,
} from '@chakra-ui/react'
import CustomIcon from './CustomIcon'
import { dateFormat } from '@/helpers/extraFunctions'
import { ReactSVG } from 'react-svg'
import { detailsLayout } from './StyleComponents'
import { svgStyle } from './StyleComponents'

const Detail = ({ data }) => {
  const { sunrise } = dateFormat(data.sys.sunrise)
  const { sunset } = dateFormat(data.sys.sunset)

  const SvgStyle = chakra(ReactSVG)

  const detailsItem = [
    {
      id: 0,
      name: <VisuallyHidden>sunrise</VisuallyHidden>,
      icon: 'sunrise',
      value: sunrise,
      boxSize: 6,
      pb: 4,
      gap1: '1em',
    },
    {
      id: 1,
      name: <VisuallyHidden>sunset</VisuallyHidden>,
      icon: 'sunset',
      value: sunset,
      boxSize: 6,
      pb: 4,
      gap1: '1em',
    },
    {
      id: 2,
      name: <span>Feels Like</span>,
      icon: 'sun',
      value: `${Math.round(data.main.feels_like)}℃`,
      boxSize: 6,
      gap1: '2em',
    },
    {
      id: 3,
      name: <span>Humidity</span>,
      icon: 'humidity',
      value: `${data.main.humidity}%`,
      boxSize: 6,
      gap1: '2em',
    },
    {
      id: 4,
      name: <span>Pressure</span>,
      icon: 'pressure',
      value: `${data.main.pressure}hpa`,
      boxSize: 6,
      gap1: '2em',
    },
  ]

  return (
    <>
      <Grid
        templateAreas={`"sunrise sunset"
                        "sun sun"
                        "humidity humidity"
                        "pressure pressure"`}
        gap={4}
        as="dl"
        pt={detailsLayout}
        pl={detailsLayout}
        pb={detailsLayout}
        maxW="300px"
      >
        {detailsItem.map((item, i) => (
          <GridItem area={item.icon} pb={item.pb} key={i.toString()}>
            <Flex key={item.id} gap={item.gap1} align="end">
              <Flex as="dt" gap="1em">
                <Box as="figure" h="1.5em">
                  <CustomIcon
                    icon={item.icon}
                    boxSize={item.boxSize}
                    color="cyan.500"
                  />
                </Box>
                {item.name}
              </Flex>
              <Flex
                as="dd"
                css={{ fontWeight: 'bold' }}
                align="end"
                gap="0.5em"
              >
                <span>{item.value}</span>
              </Flex>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}
export default Detail
