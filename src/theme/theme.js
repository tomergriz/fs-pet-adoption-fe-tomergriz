import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })



const colors = {
    brand: {
        color1: "#141726",
        color2: "#D9CAAD",
        color3: "#BF996B",
        color4: "#A66253",
        color5: "#733838",
    },
    something : {
        black: "#000000"
    }
};

export default extendTheme({ colors, theme });
