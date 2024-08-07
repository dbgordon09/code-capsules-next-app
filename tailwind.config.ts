import { type Config as TailwindConfig } from "tailwindcss";
import daisyui, { type Config as DaisyUIConfig } from "daisyui";

// Extend the Tailwind config to include DaisyUI options
interface ExtendedConfig extends TailwindConfig {
  daisyui?: DaisyUIConfig;
}

const config: ExtendedConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    base: false,
    logs: false,
  },
  plugins: [daisyui],
  theme: {},
};
export default config;
