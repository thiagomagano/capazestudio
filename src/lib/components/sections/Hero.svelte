<script>
  import scrollIntoView from "$lib/utils/scrollIntoView";
  import TypeWriter from "$lib/components/TypeWriter/TypeWriter.svelte";
</script>

<section
  id="hero"
  class="bg-secondary text-black w-full flex flex-col uppercase py-16 px-4 lg:px-0"
>
  <div
    id="headliner"
    class="container mx-auto grid grid-cols-3 place-items-end w-full lg:place-items-stretch lg:grid-cols-4"
  >
    <div
      class="hidden lg:col-start-4 lg:row-start-1 text-gray-500 xl:text-2xl lg:text-xl xl:leading-none font-normal lg:flex flex-col text-right items-center justify-center"
    >
      <div>
        <h2>Publicidade,</h2>
        <h2>Design &</h2>
        <h2>Tecnologia</h2>
      </div>
    </div>

    <div
      class="relative hidden col-start-4 row-start-2 text-gray-500 xl:text-2xl lg:text-xl xl:leading-none font-normal w-full lg:flex items-center justify-center text-right"
    >
      <div>
        <h2>Criatividade</h2>
        <h2>com</h2>
        <h2>Propósito</h2>
      </div>
      <div class="hidden lg:absolute -right-20 xl:top-[50%] w-[50px]">
        <img
          src="/svg/Setas/PC_1.svg"
          alt="Seta Apontando para botão"
          class="w-full"
          id="setaEsquerda"
        />
      </div>

      <div
        class="flex flex-col justify-center text-nowrap col-start-1 row-start-1 text-[0.65rem] sm:text-xl text-gray-500 lg:hidden font-medium mr-auto"
      >
        <h2>Criatividade</h2>
        <h2>Com Propósito</h2>
      </div>
    </div>

    <div
      class="row-start-4 col-start-3 col-span-4 text-nowrap lg:row-start-2 lg:col-start-2 lg:col-span-2 flex justify-center items-center"
    >
      <a
        href="#contato"
        on:click|preventDefault={scrollIntoView}
        class="py-5 bg-primary border-primary border-2 text-secondary text-3xl w-[60%] text-center flex justify-center items-center gap-2"
      >
        E Você, quer ser capaz?
      </a>
    </div>

    <h1 class="relative row-start-1 col-start-1 col-span-3 place-self-start">
      Capazes
      <div class="hidden size-[160px] lg:absolute top-1/2 -left-40">
        <img
          src="/svg/Setas/PC.svg"
          alt="Seta Apontando para Solucionar"
          class="w-full self-center"
          id="setaDireita"
        />
      </div>
    </h1>
    <h1 class="row-start-2 col-start-1 relative place-self-start">de</h1>
    <div class="row-start-3 col-span-4 relative 2xl:min-h-[16.5rem]">
      <TypeWriter
        texts={["Solucionar", "Humanizar", "Cativar", "Conectar", "Engajar"]}
        cl="text-[3.90rem] font-medium uppercase leading-[1] tracking-normal sm:text-[7rem] md:text-[8.5rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[15.5rem]"
      />
    </div>

    <div
      class="absolute flex size-40 sm:size-44 md:size-64 -top-[30%] left-0 lg:hidden"
    >
      <img
        src="/svg/Setas/mobile.svg"
        alt="Seta Apontando para Solucionar"
        class="w-full"
        id="MobileSetaEsquerda"
      />
    </div>

    <div
      class="row-start-2 col-start-4 absolute size-16 right-20 top-8 sm:size-36 sm:right-44 sm:top-14 lg:hidden"
    >
      <img
        src="/svg/Setas/mobile_1.svg"
        alt="Seta apontando para solucionar mobile"
        class="w-full"
        id="MobileSetaDireita"
      />
    </div>
  </div>

  <div class="flex justify-center items-center pt-4">
    <a
      href="#servicos"
      on:click|preventDefault={scrollIntoView}
      class="flex justify-center items-center"
    >
      <img
        src="/svg/Seta-head.svg"
        alt="Seta apontando para baixo"
        class="w-[25px]"
        href="#servicos"
      />
    </a>
  </div>
</section>

<style lang="postcss">
  h1 {
    @apply text-right text-[3.90rem] font-medium uppercase leading-[0.9] tracking-normal sm:text-[7rem] md:text-[8.5rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[15.5rem];
  }
</style>
