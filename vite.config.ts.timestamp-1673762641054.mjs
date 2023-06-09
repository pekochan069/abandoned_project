// vite.config.ts
import { defineConfig } from "file:///home/thinline20/dev/web/solid/song-finder/node_modules/vite/dist/node/index.js";
import vercel from "file:///home/thinline20/dev/web/solid/song-finder/node_modules/solid-start-vercel/index.js";
import solid from "file:///home/thinline20/dev/web/solid/song-finder/node_modules/solid-start/vite/plugin.js";
import UnoCSS from "file:///home/thinline20/dev/web/solid/song-finder/node_modules/unocss/dist/vite.mjs";
var vite_config_default = defineConfig(() => {
  return {
    plugins: [solid({ ssr: true, adapter: vercel({ edge: false }) }), UnoCSS()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS90aGlubGluZTIwL2Rldi93ZWIvc29saWQvc29uZy1maW5kZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3RoaW5saW5lMjAvZGV2L3dlYi9zb2xpZC9zb25nLWZpbmRlci92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS90aGlubGluZTIwL2Rldi93ZWIvc29saWQvc29uZy1maW5kZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuLy8gQHRzLWV4cGVjdC1lcnJvciBubyB0eXBpbmdcbmltcG9ydCB2ZXJjZWwgZnJvbSBcInNvbGlkLXN0YXJ0LXZlcmNlbFwiO1xuaW1wb3J0IHNvbGlkIGZyb20gXCJzb2xpZC1zdGFydC92aXRlXCI7XG5pbXBvcnQgVW5vQ1NTIGZyb20gXCJ1bm9jc3Mvdml0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtzb2xpZCh7IHNzcjogdHJ1ZSwgYWRhcHRlcjogdmVyY2VsKHsgZWRnZTogZmFsc2UgfSkgfSksIFVub0NTUygpXSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVCxTQUFTLG9CQUFvQjtBQUU3VSxPQUFPLFlBQVk7QUFDbkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUVuQixJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUNoQyxTQUFPO0FBQUEsSUFDTCxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssTUFBTSxTQUFTLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7QUFBQSxFQUM1RTtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
