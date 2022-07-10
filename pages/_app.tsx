import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Meta } from '@components/core/Meta';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/audiowide';
import '@fontsource/sanchez';
import Footer from '@components/core/Footer';

/* Theming */
const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontFamily: "Apple Garamond, serif",
        fontWeight: 'normal',
        color: '#7B622B'
      },
      variants: {
        outline: {
          border: "2px solid",
          borderColor: "#7E521E",
          color: '#7B622B'
        },
        solid: {
          bg: "#7E521E",
          color: "#F9E2D1",
          _hover: {
            bg: "rgba(126, 82, 30, 0.8)",
          }
        },
        ghost: {
          _hover: {
            bg: '#7B622B40'
          }
        },
      },
    },
    Input: {
      baseStyle: {
        borderColor: '#7B622B'
      }
    }
  },
  fonts: {
    heading: `"Audiowide", cursive`,
    body: `"Sanchez", serif`,
  },
  styles: {
    global: {
      body: {
      },
      p: {
        color: '#3A3A3A',
      },
      a: {
        _hover: {
          textDecoration: 'underline',
        },
      },
      h1: {
        fontSize: '4xl',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '2xl',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: 'lg',
      },
      h4: {
        fontSize: 'md'
      },
    },
  },
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App;
