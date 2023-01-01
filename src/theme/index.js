import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

const themeForRef = {
  colors: {
    bg: { primary: "#FFFFFF", secondary: "#F1F1F1" },
    brand: { muted: "#C6DAF7", primary: "#696AC3", secondary: "#5D6CC6" },
    text: {
      disabled: "#9C9C9C",
      error: "#D0421B",
      inverse: "#FFFFFF",
      primary: "#262626",
      secondary: "#757575",
      success: "#138000",
    },
    ui: {
      disabled: "#DEDEDE",
      error: "#D0421B",
      primary: "#262626",
      quaternary: "#FFFFFF",
      secondary: "#757575",
      success: "#138000",
      tertiary: "#F1F1F1",
    },
  },
  fontSizes: {
    body: "16px",
    button: "14px",
    caption: "12px",
    h1: "112px",
    h2: "56px",
    h3: "45px",
    h4: "34px",
    h5: "24px",
    title: "20px",
  },
  fontWeights: { bold: 700, medium: 500, regular: 400 },
  fonts: {
    body: "Oswald_400Regular",
    heading: "Lato_400Regular",
    monospace: "Oswald_400Regular",
  },
  lineHeights: { copy: "20px", title: "28px" },
  sizes: ["8px", "16px", "32px", "64px", "128px"],
  space: ["0px", "4px", "8px", "16px", "32px", "64px"],
};
