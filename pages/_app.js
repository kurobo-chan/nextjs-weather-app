import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/theme'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'

export default function App({ Component, pageProps }) {
   return (
     <ChakraProvider theme={theme}>
       <Component {...pageProps} />
     </ChakraProvider>
   )
}
