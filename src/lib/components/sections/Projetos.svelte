<script>
  import CardProjeto from "../CardProjeto.svelte";
</script>

<section id="projetos" class="py-20 bg-secondary space-y-[100px]">
  <div class="min-h-[240px] flex container mx-auto justify-between">
    <div class="flex justify-between flex-col">
      <h2 class="uppercase text-[44px]">Projetos</h2>
      <img
        src="/svg/icon-projetos.svg"
        alt="Icone de Projetos"
        class="size-12"
      />
    </div>
    <div class="flex justify-between flex-col">
      <a
        href="/projetos"
        class="flex gap-6 mt-3 hover:underline focus:underline hover:text-primary"
      >
        <img
          src="/svg/veja-todos.png"
          alt="Seta para link"
          class="mt-4 animate-pulse"
        />
        <span class=" text-4xl">Ver Todos </span>
      </a>
      <p class="max-w-[210px] text-[18px] font-body">
        Clique e conheça alguns de nossos trabalhos.
      </p>
    </div>
  </div>

  <div class="flex overflow-hidden space-x-4">
    <div
      id="carrousel"
      class="flex animate-loop-scroll space-x-4 group-hover:paused"
    >
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
    </div>
    <div
      id="carrousel"
      class="flex animate-loop-scroll space-x-4 group-hover:paused"
      aria-hidden="true"
    >
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
      <CardProjeto />
    </div>
  </div>
</section>

<style>
</style>
