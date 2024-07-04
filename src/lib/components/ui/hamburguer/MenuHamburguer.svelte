<script>
  import { fly, scale } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import scrollIntoView from "$lib/utils/scrollIntoView";

  export let open;

  const links = [
    {
      link: "servicos",
      label: "Serviços",
    },
    {
      link: "quemsomos",
      label: "Quem Somos",
    },
    {
      link: "time",
      label: "Time",
    },
    {
      link: "contato",
      label: "Contato",
    },
  ];
</script>

{#if open}
  <div
    class="bar lg:hidden border-capaz-orange-400"
    transition:scale={{ duration: 200, easing: quadOut, opacity: 1 }}
  ></div>

  <div class="menu flex flex-col gap-4 lg:hidden">
    {#each links as { link, label }, i}
      <a
        href="#{link}"
        transition:fly={{ y: -15, delay: 50 * i }}
        class="uppercase inline-block"
        on:click|preventDefault={scrollIntoView}
      >
        {label}
      </a>
    {/each}
  </div>

  <div
    class="bar lg:hidden border-capaz-orange-400"
    transition:scale={{ duration: 200, easing: quadOut, opacity: 1 }}
  ></div>
{/if}

<style>
  .menu {
    text-align: center;
    font-size: 1.2em;
    padding: 1em;
    color: #000000;
  }

  .bar {
    border-style: solid;
    border-width: 1px;
    height: 0;
  }
</style>
