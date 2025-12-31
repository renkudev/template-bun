import tailwind from "bun-plugin-tailwind";
import { renku } from "renku/bun";

export default renku({
  plugins: [tailwind],
});
