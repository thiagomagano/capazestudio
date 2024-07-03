<script>
  import scrollIntoView from "$lib/utils/scrollIntoView";
  import TypeWriter from "$lib/components/TypeWriter/TypeWriter.svelte";
</script>

<section
  id="hero"
  class="bg-secondary text-black w-full flex flex-col uppercase gap-y-20 min-h-[90svh] relative"
>
  <div
    id="headliner"
    class="flex flex-col justify-center items-center lg:grid lg:grid-cols-4 lg:grid-rows-3 container mx-auto relative justify-items-stretch"
  >
    <div
      class="col-start-1 row-start-1 text-gray-500 xl:text-3xl lg:text-2xl leading-7 ml-auto my-auto"
    >
      <ul class="self-center">
        <li>
          <h2>Criatividade</h2>
        </li>
        <li>
          <h2>com</h2>
        </li>
        <li>
          <h2>Propósito</h2>
        </li>
      </ul>
    </div>

    <div
      class="invisible lg:visible col-span-2 row-start-2 flex justify-center items-center"
    >
      <a
        href="#contato"
        on:click|preventDefault={scrollIntoView}
        class="  text-secondary bg-primary py-5 px-10 uppercase xl:text-4xl lg:text-3xl hover:bg-black hover:no-underline"
        >Fale com a gente
      </a>
    </div>

    <div
      class="row-start-2 row-end-2 text-gray-500 xl:text-3xl lg:text-2xl bold leading-7 grid"
    >
      <ul class="m-auto">
        <li>
          <h2 class="">Publicidade,</h2>
        </li>
        <li>
          <h2>Design</h2>
        </li>
        <li>
          <h2>& Tecnologia</h2>
        </li>
      </ul>
    </div>

    <h1 class="row-start-1 col-span-3">Capazes</h1>
    <h1 class="row-start-2">de</h1>
    <h1 class="row-start-3 col-span-4">Solucionar</h1>

    <!-- <TypeWriter
        texts={["Solucionar", "Humanizar", "Cativar", "Conectar", "Engajar"]}
        cl="font-medium uppercase tracking-wide leading-[0.8] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[12.2rem] 2xl:text-[13rem]"
      /> -->

    <div
      class="invisible size-12 lg:absolute lg:visible top-[24%] left-[4%] lg:size-11 xl:size-16 2xl:size-20"
    >
      <img
        src="/svg/Setas/PC.svg"
        alt="Seta Apontando para botão"
        class="w-full"
      />
    </div>

    <div
      class="invisible size-12 top-[20%] -right-[6%] lg:absolute lg:visible xl:size-14 2xl:size-20"
    >
      <img
        src="/svg/Setas/PC_1.svg"
        alt="Seta Apontando para Solucionar"
        class="w-full self-center"
      />
    </div>
  </div>

  <div class="visible lg:hidden flex justify-center items-center">
    <a
      href="#contato"
      on:click|preventDefault={scrollIntoView}
      class="  text-secondary bg-primary py-5 px-10 uppercase xl:text-4xl lg:text-3xl"
      >Fale com a gente
    </a>
  </div>

  <div class="flex justify-center items-center">
    <a
      href="#servicos"
      on:click|preventDefault={scrollIntoView}
      class="flex justify-center items-center"
    >
      <img
        src="/svg/Seta-head.svg"
        alt="Seta apontando para baixo"
        class="w-[25px] animate-bounce"
        href="#servicos"
      />
    </a>
  </div>
</section>

<style lang="postcss">
  h1 {
    @apply text-right text-[7rem] font-medium uppercase leading-[0.9] tracking-wide md:text-[9rem] lg:text-[10.5rem] xl:text-[13rem] 2xl:text-[15rem];
  }
</style>
