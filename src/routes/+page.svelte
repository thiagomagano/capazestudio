<script>
  import Headline from "$lib/components/sections/Headline.svelte";
  import Servicos from "$lib/components/sections/Servicos.svelte";
  import QuemSomos from "$lib/components/sections/QuemSomos.svelte";
  import Time from "$lib/components/sections/Time.svelte";
  import Contato from "$lib/components/sections/Contato.svelte";

  import Projetos from "../lib/components/sections/Projetos.svelte";
  import Clientes from "../lib/components/sections/Clientes.svelte";

  export let form;
</script>

<svelte:head>
  <title>Capaz Estúdio - Home</title>
</svelte:head>

<main class="overflow-hidden">
  <Headline />

  <Servicos />

  <QuemSomos />

  <Projetos />

  <Time />

  <Clientes />

  <Contato {form} />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.white);
  }
</style>
