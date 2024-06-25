<script>
  let { nome, sobrenome, cargo, foto, desc, i } = $props();
</script>

<div class="flex flex-col gap-4">
  <div class="h-[2px] w-full bg-gray-500 mb-24"></div>

  {#if i % 2 === 0}
    {#if i == 2}
      <div class="profile size-64 relative overflow-hidden mt-6">
        <div
          class="w-full h-full bg-cover bg-center hover:scale-110 transition duration-1000 ease-in-out"
          style="background-image: url('/perfil/{foto}');"
        ></div>
      </div>
    {:else}
      <div class="profile size-64 relative overflow-hidden">
        <div
          class="w-full h-full bg-cover bg-center hover:scale-110 transition duration-1000 ease-in-out"
          style="background-image: url('/perfil/{foto}');"
        ></div>
      </div>
    {/if}

    <h3 id="titulo" class="font-semibold text-2xl text-primary uppercase">
      {nome} <br />
      {sobrenome}
    </h3>

    <h4 class="text-primary text-xl font-semibold uppercase">{cargo}</h4>

    <p class="text-justify font-long text-lg">{desc}</p>

    <!-- USANDO IF PRA FAZER AS COLUNAS SEREM ASSIMETRICAS -->
  {:else}
    {#if i == 1}
      <h3
        id="titulo"
        class="font-semibold text-2xl text-primary uppercase mt-28"
      >
        {nome} <br />
        {sobrenome}
      </h3>
    {:else}
      <h3 id="titulo" class="font-semibold text-2xl text-primary uppercase">
        {nome} <br />
        {sobrenome}
      </h3>
    {/if}
    <h4 class="text-primary text-xl font-semibold uppercase">
      {cargo}
    </h4>

    <div class="profile size-64 relative overflow-hidden">
      <div
        class="w-full h-full bg-cover bg-center hover:scale-110 transition duration-1000 ease-in-out"
        style="background-image: url('/perfil/{foto}');"
      ></div>
    </div>

    <p class="text-justify font-long text-lg">{desc}</p>
  {/if}
</div>
