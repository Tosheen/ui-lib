import type { ThemeOutline } from "twind"
import { formRadio } from "@twind/forms"
import { lineClamp } from "@twind/line-clamp"

export default {
  hash: true,
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },
      fontFamily: {
        main: `'Roboto', sans-serif`,
      },
      inset: {
        "1/5": "20%",
      },
      colors: {
        primary: {
          100: "#F6F9FB",
          300: "#E2F1FC",
          500: "#2268DE",
          700: "#3641AB",
          900: "#141B50",
        },
        secondary: {
          100: "#FBFAF5",
          300: "#F9F0C8",
          500: "#9F6D25",
          700: "#623E15",
          900: "#2C1A0A",
        },
        success: {
          100: "#F3F7F5",
          300: "#DFF0ED",
          500: "#2F8B58",
          700: "#225834",
          900: "#10251D",
        },
        danger: {
          300: "#FBF0EC",
          500: "#D95164",
          700: "#9A2A35",
          900: "#431113",
        },
        neutral: {
          50: "#F5F5F5",
          100: "#E6E6E6",
          200: "#CCCCCC",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
        },
      },
      outline: {
        blue: ["2px solid #1B53E1", "0px"] as ThemeOutline, // this should be replaced to be dashed with 2px offset once icarus is completely rewritten
        gold: ["rgb(226, 161, 27) solid 2px", "2px"] as ThemeOutline,
      },
    },
  },
  preflight: {
    "@import": `url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap')`,
  },
  plugins: {
    "form-radio": formRadio,
    "line-clamp": lineClamp,
  },
}
