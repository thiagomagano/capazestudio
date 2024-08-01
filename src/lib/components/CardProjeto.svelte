<script>
  import getUrlImageFromPB from "$lib/utils/getUrlimagesFromPB.js";
  const { Case, full } = $props();
</script>

<a href="/projetos/{Case.id}" id="card" class="">
  <img
    src={getUrlImageFromPB("cases", Case.id, Case.capa)}
    alt="Capa do case da {Case.titulo}"
    class={`max-w-none object-contain ${full ? "w-full" : "w-[540px]"}`}
    loading="lazy"
  />

  <div class="py-4">
    <h4 class="text-2xl font-medium uppercase">{Case.titulo}</h4>
    <p class="uppercase">{Case.seguimento}</p>
  </div>
</a>
