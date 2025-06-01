import { makeTheme } from "dripsy";

export const theme = makeTheme({
  radii: {
    $none: 0,
    $sm: 2,
    $md: 4,
    $lg: 8,
    $xl: 12,
    $2xl: 16,
    $3xl: 24,
    $full: 9999,
  },
  fonts: {
    root: "geist",
  },
  colors: {
    $gray50: "#FAFAFA",
    $gray100: "#F6F6F6",
    $gray200: "#E8E8E8",
    $gray300: "#D3D3D3",
    $gray400: "#A8A8A8",
    $gray500: "#767676",
    $gray600: "#454545",
    $gray700: "#1F2425",
    $gray800: "#0F0F0F",
    $white: "#fff",
    $black: "#000",
    $foreground: "#F7F7FB",
    $green100: "#ECFDEC",
    $green200: "#B9F5BC",
    $green300: "#82EC8D",
    $green400: "#26BC4B",
    $green500: "#0F7E32",
    $red100: "#FFEDEF",
    $red200: "#FFE3E5",
    $red300: "#FFB1B3",
    $red400: "#FC0036",
    $red500: "#D8001B",
    $yellow100: "#FFF6DF",
    $yellow200: "#FFE8A2",
    $yellow300: "#FFC542",
    $yellow400: "#FFAE00",
    $yellow500: "#FF9300",
  },
  space: {
    $0: 0,
    $px: 1,
    $0_5: 4,
    $1: 8,
    $1_5: 12,
    $2: 16,
    $2_5: 20,
    $3: 24,
    $3_5: 28,
    $4: 32,
    $5: 40,
    $6: 48,
    $7: 56,
    $8: 64,
    $9: 72,
    $10: 80,
    $11: 88,
    $12: 96,
    $14: 112,
    $16: 128,
  },
  fontSizes: {
    $xs: 12,
    $sm: 14,
    $base: 16,
    $lg: 18,
    $xl: 20,
    $2xl: 24,
    $3xl: 30,
    $4xl: 36,
    $5xl: 48,
    $6xl: 60,
  },
  text: {
    $header1: {
      fontSize: 28,
      fontWeight: "semibold",
    },
    $header2: {
      fontSize: 24,
      fontWeight: "medium",
    },
    $subHeader: {
      fontSize: 20,
      fontWeight: "medium",
    },
    $body2: {
      fontSize: 16,
      fontWeight: "normal",
    },
    $body2Med: {
      fontSize: 16,
      fontWeight: "medium",
    },
    $body1: {
      fontSize: 15,
      fontWeight: "normal",
    },
    $body1Med: {
      fontSize: 15,
      fontWeight: "medium",
    },
    $inputText: {
      fontSize: 14,
      fontWeight: "normal",
    },
    $inputLabel: {
      fontSize: 14,
      fontWeight: "medium",
    },
    $buttonMd: {
      fontSize: 16,
      fontWeight: "medium",
    },
    $buttonSm: {
      fontSize: 14,
      fontWeight: "medium",
    },
    $captionLgSemi: {
      fontSize: 13,
      fontWeight: "semibold",
    },
    $captionLg: {
      fontSize: 13,
      fontWeight: "normal",
    },
    $captionMdSemi: {
      fontSize: 12,
      fontWeight: "semibold",
    },
    $captionMd: {
      fontSize: 12,
      fontWeight: "normal",
    },
    $label: {
      fontSize: 11,
      fontWeight: "normal",
    },
  },
  shadows: {
    $none: {
      shadowColor: "transparent",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    $sm: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.04,
      shadowRadius: 4,
      elevation: 2,
    },
    $md: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    $lg: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    $xl: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.35,
      shadowRadius: 6.27,
      elevation: 12,
    },
    $2xl: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 16,
    },
  },
});

type MyTheme = typeof theme;

declare module "dripsy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DripsyCustomTheme extends MyTheme {}
}
