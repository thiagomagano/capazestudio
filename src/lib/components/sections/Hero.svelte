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
    class="container mx-auto grid grid-cols-3 place-items-end w-full lg:place-items-stretch lg:grid-cols-4 2xl:pl-28"
  >
    <div
      class="relative hidden lg:col-start-4 lg:row-start-1 text-gray-500 xl:text-2xl lg:text-xl xl:leading-none font-medium lg:flex flex-col text-right items-center justify-center"
    >
      <div>
        <h2>Publicidade,</h2>
        <h2>Design &</h2>
        <h2>Tecnologia</h2>
      </div>
      <div
        class="hidden lg:absolute lg:block w-[200px] -right-[20%] -top-[5%] xl:w-[240px] xl:-right-[17%] xl:-top-[10%] 2xl:w-[265px] 2xl:-right-[15%] 2xl:-top-[5%]"
      >
        <img
          src="/svg/Setas/setadireita.svg"
          alt="Seta Apontando para botão"
          class="w-full"
          id="setaDireita"
        />
      </div>
    </div>

    <div
      class="relative hidden col-start-4 row-start-2 text-gray-500 xl:text-2xl lg:text-xl xl:leading-none font-medium w-full lg:flex items-center justify-center text-right"
    >
      <div>
        <h2>Criatividade</h2>
        <h2>com</h2>
        <h2>Propósito</h2>
      </div>

      <div
        class="flex flex-col justify-center text-nowrap col-start-1 row-start-1 text-[0.65rem] sm:text-xl text-gray-500 lg:hidden font-medium mr-auto"
      >
        <h2>Criatividade</h2>
        <h2>Com Propósito</h2>
      </div>
    </div>

    <div
      class="text-nowrap row-start-4 col-start-2 md:row-start-2 lg:col-span-2 flex justify-center items-center place-self-center lg:place-self-auto"
    >
      <a
        href="#contato"
        on:click|preventDefault={scrollIntoView}
        class="py-4 mt-4 px-4 lg:px-0 lg:mt-0 bg-primary text-secondary w-full text-sm md:text-xl lg:text-2xl xl:text-3xl lg:w-[60%] text-center transform transition-transform hover:scale-105"
      >
        E tu, quer ser capaz?
      </a>
    </div>

    <h1 class="relative row-start-1 col-start-1 col-span-3 place-self-start">
      Capazes
      <div
        class="hidden lg:absolute lg:block lg:w-[230px] lg:-top-6 lg:-left-[22%] xl:w-auto xl:-top-16 xl:-left-52 2xl:-top-6 2xl:-left-52"
      >
        <img
          src="/svg/Setas/setaesquerda.svg"
          alt="Seta Apontando para Solucionar"
          class="w-full self-center"
          id="setaEsquerda"
        />
      </div>
    </h1>
    <h1 class="row-start-2 col-start-1 relative place-self-start">de</h1>
    <div
      class="row-start-3 col-span-4 relative min-h-[4rem] sm:min-h-[7rem] md:min-h-[9rem] lg:min-h-[11.5rem] xl:min-h-[13.5rem] 2xl:min-h-[16.5rem] place-self-start"
    >
      <TypeWriter
        texts={["Solucionar", "Humanizar", "Cativar", "Conectar", "Engajar"]}
        cl="text-right text-[3.8rem] font-medium uppercase leading-[0.9] tracking-normal sm:text-[7rem] md:text-[9rem] lg:text-[11.5rem] xl:text-[13.5rem] 2xl:text-[15.5rem]"
      />
    </div>
  </div>

  <a
    href="#servicos"
    on:click|preventDefault={scrollIntoView}
    class="flex justify-center items-center mt-8 transform transition-transform hover:scale-110"
  >
    <img
      src="/svg/Seta-head.svg"
      alt="Seta apontando para baixo"
      class="w-[18px] md:w-[25px]"
      href="#servicos"
    />
  </a>
</section>

<style lang="postcss">
  h1 {
    @apply text-right text-[3.8rem] font-medium uppercase leading-[0.9] tracking-normal sm:text-[7rem] md:text-[9rem] lg:text-[11.5rem] xl:text-[13.5rem] 2xl:text-[15.5rem];
  }
</style>
