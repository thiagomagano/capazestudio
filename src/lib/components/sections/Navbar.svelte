<script>
  import scrollIntoView from "../../utils/scrollIntoView";
  import { Hamburger } from "svelte-hamburgers";
  import Menu from "$lib/components/ui/hamburguer/MenuHamburguer.svelte";

  let open;
</script>

<nav class="bg-secondary text-black w-full border-gray-500">
  <div
    class="flex flex-row justify-between items-center px-3 lg:px-12 py-8 3xl:container 3xl:mx-auto 3xl:px-0"
  >
    <div class="w-48">
      <img src="/svg/Logo-nav-bar.svg" alt="Logo Capaz Studio" class="w-full" />
    </div>

    <ul role="list" class="hidden md:flex gap-4 uppercase items-center text-xl">
      <li>
        <a href="#servicos" on:click|preventDefault={scrollIntoView}>Serviços</a
        >
      </li>
      <li>
        <a href="#quemsomos" on:click|preventDefault={scrollIntoView}>
          Quem Somos</a
        >
      </li>
      <li>
        <a href="#time" on:click|preventDefault={scrollIntoView}> Time</a>
      </li>
      <li>
        <a href="#contato" on:click|preventDefault={scrollIntoView}> Contato</a>
      </li>
    </ul>
    <div class="block md:hidden">
      <Hamburger bind:open --color="black" />
    </div>
  </div>
  <Menu bind:open />
</nav>

<style lang="postcss">
  a {
    @apply font-medium transition-all duration-75 ease-linear hover:text-capaz-orange-500;
  }
</style>
