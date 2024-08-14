<script>
  import scrollIntoView from "../../utils/scrollIntoView";
  import Hamburger from "$lib/components/ui/hamburguer/Hamburguer.svelte";
  import Menu from "$lib/components/ui/hamburguer/MenuHamburguer.svelte";

  let open = $state(false);

  const { home } = $props();
</script>

<nav class="bg-secondary text-black w-full">
  <div
    class="flex flex-row justify-between items-center px-3 lg:px-12 py-8 2xl:px-0 mx-auto container sticky top-0"
  >
    <a href="/" class="w-48">
      <img src="/svg/Logo-nav-bar.svg" alt="Logo Capaz Studio" class="w-full" />
      <span class="hidden">Capaz Estúdio</span>
    </a>

    <ul role="list" class="hidden md:flex gap-4 uppercase items-center text-xl">
      {#if home}
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projetos"> Projetos</a>
        </li>
        <li></li>
      {:else}
        <li>
          <a href="#servicos" on:click|preventDefault={scrollIntoView}
            >Serviços</a
          >
        </li>
        <li>
          <a href="#quemsomos" on:click|preventDefault={scrollIntoView}>
            Quem Somos</a
          >
        </li>
        <li>
          <a href="#projetos" on:click|preventDefault={scrollIntoView}>
            Projetos</a
          >
        </li>
        <li>
          <a href="#time" on:click|preventDefault={scrollIntoView}> Time</a>
        </li>
        <li>
          <a href="#contato" on:click|preventDefault={scrollIntoView}>
            Contato</a
          >
        </li>
      {/if}
    </ul>
    <div class="block md:hidden">
      <Hamburger bind:open --color="black" />
    </div>
  </div>
  <Menu bind:open />
</nav>

<style lang="postcss">
  a {
    @apply transform font-medium transition-all ease-linear hover:scale-110 hover:text-capaz-orange-500;
  }
</style>
