import { defineConfig } from "vite";
// @ts-expect-error no typing
import vercel from "solid-start-vercel";
import solid from "solid-start/vite";
import UnoCSS from "unocss/vite";

export default defineConfig(() => {
  return {
    plugins: [solid({ ssr: true, adapter: vercel({ edge: false }) }), UnoCSS()],
    ssr: {
      noExternal: ["@kobalte/core"],
    },
  };
});
