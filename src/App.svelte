<script>
    import router from "page";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";
    import Contact from './pages/Contact.svelte';

    let page;

    router ('/', () => (page = Home));
    router ('/about',() => (page = About));
    router ('/contact', () => (page = Contact));

    router.start();
</script>

<svelte:component this={page} />