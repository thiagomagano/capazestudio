<script>
  import CardProjeto from "$lib/components/CardProjeto.svelte";
</script>

<svelte:head>
  <title>Capaz Estúdio - Projetos</title>
</svelte:head>

<section class="bg-secondary">
  <div class="container mx-auto py-20 space-y-20">
    <div class="flex justify-between">
      <h1 class="text-5xl font-medium uppercase">Projetos</h1>
      <img
        src="/svg/icon-projetos.svg"
        alt="Icone de Projetos"
        class="size-16"
      />
    </div>

    <div class="grid-cols-2 grid grid-flow-row justify-center items-center">
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
    </div>
  </div>
</section>
