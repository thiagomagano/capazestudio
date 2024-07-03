<script>
  import scrollIntoView from "$lib/utils/scrollIntoView";
  import TypeWriter from "$lib/components/TypeWriter/TypeWriter.svelte";
</script>

<section
  id="hero"
  class="bg-secondary text-black w-full flex flex-col uppercase min-h-[90svh] lg:py-0 py-20 px-4"
>
  <div
    id="headliner"
    class="container mx-auto my-auto grid grid-cols-3 place-items-end lg:grid lg:grid-cols-4 lg:grid-rows-3 relative lg:px-20 lg:py-20"
  >
    <div
      class="hidden lg:flex flex-col col-start-1 row-start-1 text-gray-500 xl:text-2xl lg:text-xl xl:leading-none font-medium mr-auto"
    >
      <h2>Criatividade</h2>
      <h2>com</h2>
      <h2>Propósito</h2>
    </div>

    <div
      class="flex flex-col justify-center text-nowrap col-start-1 row-start-1 text-[0.65rem] sm:text-xl text-gray-500 lg:hidden xl:text-2xl lg:text-xl xl:leading-none font-medium mr-auto"
    >
      <h2>Criatividade</h2>
      <h2>Com Propósito</h2>
    </div>

    <div
      class="flex items-center justify-center row-start-4 col-start-1 col-span-4 w-full lg:row-start-2 lg:col-span-2 pt-4 text-nowrap"
    >
      <a
        href="#contato"
        on:click|preventDefault={scrollIntoView}
        class="block text-center w-full text-secondary bg-primary py-2 uppercase text-xl font-normal sm:text-2xl md:text-4xl lg:text-2xl hover:bg-black hover:no-underline mt-10"
        >Fale com a gente
      </a>
    </div>

    <div
      class="hidden lg:col-start-3 lg:row-start-2 lg:row-end-2 text-gray-500 xl:text-2xl lg:text-xl xl:leading-none font-medium"
    >
      <ul class="">
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

    <h1 class="row-start-1 col-start-2 col-span-3">Capazes</h1>
    <h1 class="row-start-2 lg:col-span-2 col-start-4 relative">de</h1>
    <h1 class="row-start-3 col-span-4">Solucionar</h1>

    <!-- <TypeWriter
        texts={["Solucionar", "Humanizar", "Cativar", "Conectar", "Engajar"]}
        cl="font-medium uppercase tracking-wide leading-[0.8] md:text-[6.5rem] lg:text-[8.5rem] xl:text-[12.2rem] 2xl:text-[13rem]"
      /> -->

    <div
      class="invisible size-16 lg:absolute lg:visible lg:size-[3rem] lg:top-[31%] lg:left-[1%] xl:size-[4.5rem] xl:-left-[2%] xl:top-[27.5%] 2xl:size-[5.5rem]"
    >
      <img
        src="/svg/Setas/PC.svg"
        alt="Seta Apontando para botão"
        class="w-full"
      />
    </div>

    <div
      class="invisible size-12 lg:absolute lg:visible lg:size-13 lg:top-[28%] lg:right-[1%] xl:size-16 xl:top-[25%] xl:-right-[1%] 2xl:size-20 2xl:top-[23%] 2xl:-right-[1%]"
    >
      <img
        src="/svg/Setas/PC_1.svg"
        alt="Seta Apontando para Solucionar"
        class="w-full self-center"
      />
    </div>

    <div
      class="absolute flex size-40 sm:size-44 md:size-64 -top-[30%] left-0 lg:hidden"
    >
      <img
        src="/svg/Setas/mobile.svg"
        alt="Seta Apontando para Solucionar"
        class="w-full"
      />
    </div>

    <div
      class="row-start-2 col-start-4 absolute size-16 right-20 top-8 sm:size-36 sm:right-44 sm:top-14 lg:hidden"
    >
      <img
        src="/svg/Setas/mobile_1.svg"
        alt="Seta apontando para solucionar mobile"
        class="w-full"
      />
    </div>
  </div>

  <div class="flex justify-center items-center lg:mt-20">
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
    @apply text-right text-[3.90rem] font-medium uppercase leading-[0.9] tracking-normal sm:text-[7rem] md:text-[8.5rem] lg:text-[9.5rem] xl:text-[12.5rem] 2xl:text-[15rem];
  }
</style>
