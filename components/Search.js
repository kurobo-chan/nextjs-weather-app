import { ColumnMargin, RowMargin } from './StyleComponents'
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import CustomIcon from './CustomIcon'
import { centerStyle } from './StyleComponents'

const Search = ({
  iserror,
  inputCity,
  setInputCity,
  setCity,
  handleCurrentLocationClick,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setCity(inputCity)
      setInputCity('')
    }
  }

  const handleSearchClick = () => {
    setCity(inputCity)
    setInputCity('')
  }

  return (
    <>
      <RowMargin pt={`0`} as={`nav`}>
        <ColumnMargin>
          <InputGroup>
            <InputLeftElement
              color="gray.300"
              fontSize="1.2em"
              style={centerStyle}
              onClick={handleSearchClick}
            >
              <IconButton
                aria-label="search"
                bg={'none'}
                icon={<CustomIcon icon="search" boxSize={6} />}
              />
            </InputLeftElement>
            <Input
              size="lg"
              placeholder="City"
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {iserror && <div>{iserror}</div>}
            <InputRightElement
              style={centerStyle}
              onClick={handleCurrentLocationClick}
            >
              <IconButton
                aria-label="marker"
                bg={'none'}
                icon={<CustomIcon icon="marker" boxSize={6} />}
              />
            </InputRightElement>
          </InputGroup>
        </ColumnMargin>
      </RowMargin>
    </>
  )
}
export default Search
