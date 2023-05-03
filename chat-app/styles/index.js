import { extendTheme } from 'native-base'

const newTheme = {
  fontConfig: {
    Montserrat: {
      300: {
        normal: 'MontserratLight'
      },
      400: {
        normal: 'MontserratRegular'
      },
      500: {
        normal: 'MontserratSemiBold'
      },
      700: {
        normal: 'MontserratBold'
      }
    }
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat'
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'lightBlue'
      },
      variants: {
        rounded: ({ colorScheme }) => {
          return {
            bg: `${colorScheme}.600`,
            rounded: 'full'
          }
        }
      }
    }
  }
}
const theme = extendTheme(newTheme)

export { theme }
