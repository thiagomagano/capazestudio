<script>
  export let data;

  const listaFotosA = data?.fotos?.slice(0, 4);
  const listaFotosB = data?.fotos?.slice(4);
</script>

<section class="min-h-screen bg-secondary space-y-4 py-20">
  <div class="container mx-auto space-y-8 py-10">
    <div>
      <h1 class="text-[80px] font-semibold leading-[90px]">{data.titulo}</h1>
      <h2 class="sub text-[24px] font-medium leading-[35px] text-primary">
        {data.seguimento}
      </h2>
    </div>
    <div>
      <span class="font-medium">Serviço:</span>
      <p class="text-gray-800">{data.servico}</p>
    </div>
    <p></p>
    <p
      class="text-[20px] max-w-screen-xl leading-[32px] tracking-normal font-body"
    >
      {data.apresentacao}
    </p>
  </div>
  <div class="w-full bg-white">
    <img src={data.capa} alt="Placeholder" class="w-full object-contain" />
  </div>

  <div class="container mx-auto space-y-8">
    <div class="grid-cols-2 grid gap-4">
      <div></div>
      <div></div>

      {#each listaFotosA as foto, i}
        <div class="relative">
          <img src={foto} alt="" class="w-full" />
          <span class="absolute top-0 left-0 p-4">Foto: {i + 1}</span>
        </div>
      {/each}
    </div>
    <div class="grid grid-cols-4 py-20">
      <h3 class="grid-span-1 text-[48px] font-bold text-primary">Sobre</h3>
      <p class="col-start-2 col-span-2 text-[20px] leading-[32px] font-body">
        {data.sobre}
      </p>
    </div>
  </div>
  <div class="container mx-auto space-y-4">
    {#each listaFotosB as foto, i}
      <div class="relative">
        <img src={foto} alt="" class="w-full" />
        <span class="absolute top-0 left-0 p-4">Foto: {i + 1}</span>
      </div>
    {/each}
  </div>

  <!-- TODO Carrousel Infinito com outros projetos -->
</section>
