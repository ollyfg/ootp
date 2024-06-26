import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import wyw from "@wyw-in-js/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    wyw({
      include: ["**/*.{ts,tsx}"],
      overrideContext: (context) =>
        // @ts-expect-error
        process.env.NODE_ENV === "development"
          ? { ...context, $RefreshSig$: () => () => () => {} }
          : context,
    }),
    preact(),
  ],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
});
