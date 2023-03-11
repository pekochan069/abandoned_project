import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
} from "unocss";

import { presetKobalte } from "unocss-preset-primitives";

export default defineConfig({
  transformers: [transformerVariantGroup()],
  theme: {
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2000px",
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        plex: [
          {
            provider: "google",
            name: "IBM Plex Sans KR",
            weights: [200, 400, 700],
          },
        ],
        leckerli: [
          {
            provider: "google",
            name: "Leckerli One",
          },
        ],
      },
    }),
    presetIcons({
      
    }),
    presetKobalte(),
  ],
});
