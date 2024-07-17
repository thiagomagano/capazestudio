<script>
  import Navbar from "$lib/components/sections/Navbar.svelte";
  import Headline from "$lib/components/sections/Headline.svelte";
  import Servicos from "$lib/components/sections/Servicos.svelte";
  import QuemSomos from "$lib/components/sections/QuemSomos.svelte";
  import Time from "$lib/components/sections/Time.svelte";
  import Contato from "$lib/components/sections/Contato.svelte";
  import Rodape from "$lib/components/sections/Rodape.svelte";
</script>

<svelte:head>
  <title>Capaz Estúdio</title>
</svelte:head>

<Navbar />

<main class="overflow-hidden border">
  <Headline />

  <Servicos />

  <QuemSomos />

  <Time />

  <Contato />

  <Rodape />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.white);
  }
</style>
