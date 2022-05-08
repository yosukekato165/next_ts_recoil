import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    }
  },
  styles: {
    global: {
      'html, body': {
        color: '#252525',
        background: '#fff',
        lineHeight: '1.4142135623',
        fontSize: 'base',
        letterSpacing: '0.08em',
        textAlign: 'justify',
        textJustify: 'inter-ideograph',
        fontFamily:
          '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic",Meiryo, sans-serif'
      },
      li: {
        listStyle: 'none'
      }
    }
  }
})
