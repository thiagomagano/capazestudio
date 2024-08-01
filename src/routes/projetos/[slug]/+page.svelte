<script>
  export let data;

  import getUrlImageFromPB from "$lib/utils/getUrlImagesFromPB.js";

  const listaFotosA = data?.fotos?.slice(1, 5);
  const listaFotosB = data?.fotos?.slice(5);
</script>

<section class="min-h-screen bg-secondary space-y-4 py-20">
  <div class="container mx-auto space-y-8 py-10">
    <div>
      <h1 class="text-[80px] font-semibold leading-[90px]">{data.titulo}</h1>
      <h2 class="sub text-[24px] font-medium leading-[35px]">
        {data.seguimento}
      </h2>
    </div>
    <div>
      <span class="font-medium">Serviços:</span>
      <p class="text-gray-800">{data.servicos}</p>
    </div>
    <p></p>
    <p
      class="text-[20px] max-w-screen-xl leading-[32px] tracking-normal font-body"
    >
      {@html data.apresentacao}
    </p>
  </div>
  <div class="w-full bg-white">
    <img
      src={getUrlImageFromPB("cases", data.id, data.fotos[0])}
      alt="Capa do case {data.titulo}"
      class="w-full object-contain"
    />
  </div>

  <div class="container mx-auto space-y-8">
    <div class="grid gap-4">
      <div></div>
      <div></div>

      {#each listaFotosA as foto, i}
        <div class="relative">
          <img
            src={getUrlImageFromPB("cases", data.id, foto)}
            alt="Imagem do case {data.titulo}"
            class="w-full"
          />
          <!-- <span class="absolute top-0 left-0 p-4">Foto: {i + 1}</span> -->
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 py-20">
      <h3 class="grid-span-1 text-[48px] font-medium uppercase">Sobre</h3>
      <p class="col-start-2 col-span-2 text-[20px] leading-[32px] font-body">
        {@html data.sobre}
      </p>
    </div>
  </div>
  <div class="container mx-auto space-y-4">
    {#each listaFotosB as foto, i}
      <div class="relative">
        <img
          src={getUrlImageFromPB("cases", data.id, foto)}
          alt="Imagem do case {data.titulo}"
          class="w-full"
        />
        <!-- <span class="absolute top-0 left-0 p-4">Foto: {i + 1}</span> -->
      </div>
    {/each}
  </div>

  <!-- TODO Carrousel Infinito com outros projetos -->
</section>
