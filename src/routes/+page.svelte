<script>
  import Hero from "$lib/components/sections/Hero.svelte";
  import Servicos from "$lib/components/sections/Servicos.svelte";
  import QuemSomos from "$lib/components/sections/QuemSomos.svelte";
  import Time from "$lib/components/sections/Time.svelte";
  import Contato from "$lib/components/sections/Contato.svelte";
  import Navbar from "$lib/components/sections/Navbar.svelte";

  import Projetos from "../lib/components/sections/Projetos.svelte";
  import Clientes from "../lib/components/sections/Clientes.svelte";
  import Ativos from "$lib/components/sections/Ativos.svelte";

  export let form;
  export let data;

  const Cases = data.items;
</script>

<svelte:head>
  <title>Capaz Estúdio - Home</title>
</svelte:head>

<main class="overflow-hidden">
  <Hero />

  <Servicos />

  <QuemSomos />

  <Projetos {Cases} />

  <Time />

  <Ativos />

  <Clientes />

  <Contato {form} />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.white);
  }
</style>
