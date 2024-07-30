<script>
  import CardProjeto from "../CardProjeto.svelte";
</script>

<section id="projetos" class="py-20 bg-secondary space-y-[100px]">
  <div
    class="grid grid-cols-1 sm:grid-cols-2 container mx-auto place-items-start gap-y-20 px-4 sm:px-0"
  >
    <div class="flex items-center sm:items-start sm:flex-col gap-24">
      <h2
        class="text-4xl font-medium uppercase text-nowrap pb-4 xl:pb-0 col-start-1"
      >
        Projetos
      </h2>

      <img
        src="/svg/icon-projetos.svg"
        alt="Icone de Projetos"
        class="size-12"
      />
    </div>

    <div
      class="sm:place-self-end flex flex-row-reverse sm:flex-col items-start sm:gap-24 gap-10"
    >
      <a
        href="/projetos"
        class="flex items-center justify-center gap-2 hover:underline focus:underline hover:text-primary"
      >
        <img
          src="/svg/veja-todos.png"
          alt="Seta para link"
          class="size-3 mt-3"
        />
        <span class=" text-xl">Ver Todos </span>
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
