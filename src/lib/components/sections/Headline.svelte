<script>
  import scrollIntoView from "$lib/utils/scrollIntoView";
  import TypeWriter from "$lib/components/TypeWriter/TypeWriter.svelte";
</script>

<section
  id="top"
  class="bg-secondary text-black w-full grid place-items-center min-h-[calc(100svh-70px)] p-16 uppercase max-w-[1920px]"
>
  <div
    id="headliner"
    class="grid grid-cols-8 grid-rows-3 w-full justify-items-stretch"
  >
    <div
      class="col-start-1 col-end-1 w-[75px] grid row-span-2 ml-auto mr-8 mt-12"
    >
      <img
        src="/svg/Setas/PC.svg"
        alt="Seta Apontando para botão"
        class="w-full self-center"
      />
    </div>
    <div
      class="col-start-2 col-end-2 row-start-1 row-end-1 grid text-wrap text-gray-500 text-2xl font-medium leading-7"
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

    <div class="col-start-2 col-end-4 row-start-2 row-end-2 grid w-full">
      <a
        href="#contato"
        on:click|preventDefault={scrollIntoView}
        class="text-secondary bg-primary py-4 px-14 text-4xl w-full uppercase self-center"
        >Fale com a Gente</a
      >
    </div>

    <div
      class="col-start-5 col-end-5 row-start-2 row-end-2 text-gray-500 text-2xl bold leading-7 grid font-medium"
    >
      <ul class="self-center">
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

    <div
      class="col-start-3 col-span-4 row-start-1 row-end-1 grid w-full place-items-end pl-48"
    >
      <h1
        class="xl:text-[14.5rem] lg:text-[11rem] font-medium uppercase tracking-wide"
      >
        Capazes
      </h1>
    </div>

    <div class="col-start-7 col-end-7 row-start-2 row-end-2 grid">
      <h1
        class="xl:text-[14.5rem] lg:text-[11rem] font-medium uppercase self-end tracking-wide"
      >
        de
      </h1>
    </div>

    <div
      class="col-start-2 col-end-8 row-start-3 row-end-3 grid justify-items-stretch justify-self-end"
    >
      <TypeWriter
        texts={["Solucionar", "Humanizar", "Cativar", "Conectar", "Engajar"]}
        cl="xl:text-[14.5rem] lg:text-[11rem] font-medium uppercase tracking-wide leading-[0.8] justify-self-end mr-[-80px]"
      />
    </div>
    <div
      class="col-start-8 col-end-8 w-[75px] grid row-span-3 mr-auto ml-24 mt-12"
    >
      <img
        src="/svg/Setas/PC_1.svg"
        alt="Seta Apontando para Solucionar"
        class="w-full h-96 self-center"
      />
    </div>
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

<style>
  h1 {
    line-height: 0.9;
  }
</style>
