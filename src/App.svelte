<script>
  import router from "page";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from './pages/Contact.svelte';
  import Donation from './pages/Donation.svelte';
  import NotFound from './pages/NotFound.svelte';
  import Success from './pages/Success.svelte';
  import Errors from "./pages/Error.svelte";


  let page, params;

  // Definisikan rute
  router('/', () => (page = Home));
  router('/about', () => (page = About));
  router('/contact', () => (page = Contact));
  router('/success', () => (page = Success));
  router('/error', () => (page = Errors));
  router('/donation/:id', (ctx) => {
      params = ctx.params; // Ambil parameter dari URL
      page = Donation; // Tampilkan halaman Donation
  });
  router('/*', () => (page = NotFound)); // Rute fallback untuk halaman tidak ditemukan

  // Mulai router
  router(); // Tidak perlu `start()`
</script>

<svelte:component this={page} {params} />