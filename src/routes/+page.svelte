<script>
  import Navbar from "$lib/components/sections/Navbar.svelte";
  import Headline from "$lib/components/sections/Headline.svelte";
  import Servicos from "$lib/components/sections/Servicos.svelte";
  import QuemSomos from "$lib/components/sections/QuemSomos.svelte";
  import Time from "$lib/components/sections/Time.svelte";
  import Contato from "$lib/components/sections/Contato.svelte";
</script>

<Navbar />

<main>
  <Headline />

  <Servicos />

  <QuemSomos />

  <Time />

  <Contato />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
