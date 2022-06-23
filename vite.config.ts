import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Inline images up to 40kb in size, up from the default of 4kb
    assetsInlineLimit: 40960,
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "obscured",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
})
