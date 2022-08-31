import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Meta } from '@components/core/Meta';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '@fontsource/audiowide';
import '@fontsource/sanchez';
import Footer from '@components/core/Footer';
import { NavBar } from '@components/core/Navbar';
import { Keysho } from "keysho";
import "keysho/dist/index.css";

/* Theming */
const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
      },
      variants: {
        outline: {
          border: "2px solid",
        },
        ghost: {
          _hover: {
            background: 'transparent',
            color: '#3D4E74',
          },
        }
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
        fontSize: '1.15rem',
      },
      p: {
        color: '#3A3A3A',
      },
      a: {
        color: '#3D4E74',
        _hover: {
          textDecoration: 'underline',
          color: '#6379AD',
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
      {/* <Keysho
        config_uuid='031eeeee-0535-11ed-8593-423a4adfad1d' actionMap={undefined} /> */}
      <Meta />
      <ChakraProvider theme={theme}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App;
