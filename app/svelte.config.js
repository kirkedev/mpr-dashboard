import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";

export default {
    preprocess: sveltePreprocess({
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    })
}
