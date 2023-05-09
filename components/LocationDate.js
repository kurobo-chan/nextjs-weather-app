import { Grid, Heading, Text } from '@chakra-ui/react'
import { dateFormat } from '@/helpers/extraFunctions'

const LocationDate = ({ data }) => {
  const { dateTime, date, time } = dateFormat()

  return (
    <>
      <Grid>
        <Heading as="h2" size="md" color="cyan.500">
          {data.name ? `${data.name}, ${data.sys.country}` : data['dt_txt']}
        </Heading>
        <Grid gap={2}>
          <Text as="time" fontSize="xl" dateTime={dateTime}>
            {date}
          </Text>
          <Text as="time" fontSize="xl" dateTime={dateTime}>
            {time}
          </Text>
        </Grid>
      </Grid>
    </>
  )
}
export default LocationDate
