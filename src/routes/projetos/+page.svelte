<script>
  import CardProjeto from "$lib/components/CardProjeto.svelte";

  export let data;

  const Cases = data.items;
</script>

<svelte:head>
  <title>Capaz Estúdio - Projetos</title>
</svelte:head>

<section class="bg-secondary px-4 lg:px-0">
  <div class="container mx-auto py-20 space-y-20">
    <div class="flex justify-between">
      <h1 class="text-5xl font-medium uppercase">Projetos</h1>
      <img
        src="/svg/icon-projetos.svg"
        alt="Icone de Projetos"
        class="size-16"
      />
    </div>

    <div
      class="lg:grid-cols-2 grid grid-flow-row justify-center items-center gap-4"
    >
      {#each Cases as Case}
        <CardProjeto {Case} full={true} />
      {/each}
    </div>

    <!-- TODO ORDEM DOS CASES

              Bravo
              Compe
              Weon
              BG
              Nuv
              Matheus
              DG
              Sabino 
              
      -->
  </div>
</section>
