import { Grid, GridItem } from '@chakra-ui/react'

export const ColumnMargin = ({ children, mx }) => {
  return (
    <>
      <Grid
        templateColumns={`clamp(1em, 0.6479em + 1.5023vw, 2em) 1fr clamp(1em, 0.6479em + 1.5023vw, 2em)`}
      >
        <GridItem colStart={2} overflow="hidden" mx={mx}>
          {children}
        </GridItem>
      </Grid>
    </>
  )
}

export const RowMargin = ({
  children,
  pt,
  pb,
  as,
  bg,
  rowSpan,
  colSpan,
  colStart,
  colEnd,
  rowEnd,
  rowStart,
}) => {
  const paddingTop = pt || `clamp(1.5rem, 1.3239rem + 0.7512vw, 2rem)`
  const paddingBottom = pb || [6, 6, 8]
  return (
    <>
      <GridItem
        as={as}
        pt={paddingTop}
        pb={paddingBottom}
        bg={bg}
        rowSpan={{
          base: 'none',
          lg: rowSpan,
        }}
        colSpan={{
          base: 'none',
          lg: colSpan,
        }}
        colStart={{
          base: 'none',
          lg: colStart,
        }}
        colEnd={{
          base: 'none',
          lg: colEnd,
        }}
        rowEnd={{
          base: 'none',
          lg: rowEnd,
        }}
        rowStart={{
          base: 'none',
          lg: rowStart,
        }}
      >
        {children}
      </GridItem>
    </>
  )
}

export const centerStyle = {
  margin: 'auto',
  top: '50%',
  transform: 'translateY(-50%) ',
}

export const detailsLayout = [
  '2em', // 0-30em
  '2em', // 30em-48em
  '2em', // 48em-62em
  '0.5em', // 62em+
]

export const svgStyle = {
  width: '4em',
  height: '4em',
  '>*': {
    '>*': {
      width: '100%',
      height: '100%',
    },
  },
}
