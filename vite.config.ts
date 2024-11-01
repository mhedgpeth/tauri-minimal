import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteTesting } from "@testing-library/svelte/vite";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
/** @type {import("vite").UserConfig} */
export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  // support $lib alias
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
  // configure testing
  test: {
    // this allows us to add matchers to a single expect
    globals: true,
    // test within a browser-like environment
    environment: "jsdom",
    // include everything in the src directory
    include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)", "**/*.spec.svelte.ts"],
    // file that runs before every test file is run
    setupFiles: "vitest-setup.ts",
    // code coverage is left out of this configuration
  },
});
