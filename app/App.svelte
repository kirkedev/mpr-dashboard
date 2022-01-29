<style lang="postcss">
    .app {
        @apply max-w-screen-xl;
        @apply mx-auto;
        @apply p-8;
        @apply container;
        @apply rounded-lg;
        @apply flex flex-col;
    }

    nav {
        @apply bg-zinc-800;
        @apply px-4;
        @apply py-2;
        @apply mb-4;
        @apply w-full;
        @apply rounded-lg;
        @apply shadow-lg;
        @apply flex flex-row;
        @apply justify-start;
    }

    nav a {
        @apply px-4;
        @apply py-2;
        @apply mr-2;
        @apply no-underline;
        @apply text-white;
        @apply rounded-lg;
        @apply focus:bg-zinc-900 active:focus:bg-zinc-900;
    }

    main {
        @apply p-8;
        @apply w-full;
        @apply h-full;
        @apply bg-gray-50;
        @apply rounded-lg;
        @apply shadow-xl;
    }
</style>

<script lang="ts">
    import { links, Route, Router } from "svelte-navigator";
    import Markets from "./Markets.svelte";
    import Swine from "./Swine.svelte";
    import Pork from "./Pork.svelte";
</script>

<Router primary={false}>
    <div class="app">
        <nav use:links>
            <a href="markets">Markets</a>
            <a href="swine">Swine</a>
            <a href="pork">Pork</a>
        </nav>

        <main>
            <Route>
                <Markets/>
            </Route>

            <Route path="swine">
                <Swine/>
            </Route>

            <Route path="pork">
                <Pork/>
            </Route>
        </main>
    </div>
</Router>
