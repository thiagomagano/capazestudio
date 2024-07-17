<script>
  let { nome, sobrenome, cargo, foto, desc, i } = $props();
</script>

<div class="space-y-4">
  <div class="profile w-300px sm:w-[350px] h-96 relative overflow-hidden group">
    <div
      class="w-full h-full bg-cover bg-center group-hover:scale-105 hover:bg-opacity-65 transition duration-1000 ease-in-out"
      style="background-image: url('/perfil/{foto}');"
    ></div>

    <div
      class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 flex text-secondary items-end font-medium bg-black/85"
    >
      <p class=" font-long py-4 px-6">{desc}</p>
    </div>
  </div>
  <h4 class=" text-xl font-medium uppercase text-secondary">{cargo}</h4>
  <h3 id="titulo" class="text-2xl font-semibold uppercase text-primary">
    {nome} <br />
    {sobrenome}
  </h3>
</div>

<style lang="postcss">
</style>
