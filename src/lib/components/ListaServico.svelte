<script>
  // let titulo = $state("Titulo");
  // let iconUrl = $state("/svg/Servicos.svg");
  //let itens = $state([]);

  let { titulo, iconUrl, itens } = $props();
</script>

<div class="flex flex-col gap-8 w-full">
  <div class="flex justify-between items-center">
    <h3 class="text-3xl font-normal uppercase">{titulo}</h3>
    <img src={iconUrl} alt="Icone da {titulo}" class="w-6" />
  </div>

  <ul class="flex flex-col gap-4 text-xl">
    {#each itens as item, i}
      {#if i == 0}
        <li
          class="flex justify-between items-center border-b-[3px] border-t-[3px] py-4 px-2 border-gray-500"
        >
          <span>{item}</span>
          <img src="/svg/INFOS-mais.svg" class="w-4" alt="Icone de Mais" />
        </li>
      {:else}
        <li
          class="flex justify-between items-center border-b-[3px] py-4 px-2 border-gray-500"
        >
          <span>{item}</span>
          <img src="/svg/INFOS-mais.svg" class="w-4" alt="Icone de Mais" />
        </li>
      {/if}
    {/each}
  </ul>
</div>
