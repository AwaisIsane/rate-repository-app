import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    backgroundSecondary: "#24292e",
    white: "#FFFFFF",
    blue: '#0366d6',
    error:'#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    appTitle: 20,
    formInput:16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  margin: {
    default: 10,
  },
  padding: {
    default: 10,
    default2: 20,
    min:5,
  },
  borderRadius: {
    image:5,
    button:5,
  }
};

export default theme;
