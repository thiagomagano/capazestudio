<script>
  import CardAtivo from "../CardAtivo.svelte";
</script>

<section class="py-16 bg-secondary px-4 lg:px-0">
  <div class="mx-auto container space-y-10">
    <div class="flex justify-between">
      <h1 class="text-4xl font-medium uppercase text-nowrap pb-4 xl:pb-0">
        Clientes Ativos
      </h1>
      <img src="/svg/coracao.svg" alt="Icon Coração" />
    </div>

    <div
      class="grid lg:grid-cols-2 place-items-center mx-auto gap-4 2xl:px-80 xl:px-48"
    >
      <CardAtivo
        link="https://instagram.com/embutidosesperanca"
        logo="/projetos/esperanca-ativo.svg"
        cliente="esperanca"
        cor="#db3228"
      />
      <CardAtivo
        link="https://instagram.com/latinasul_distribuidora"
        logo="/projetos/latinasul-ativo.png"
        cliente="latina"
        cor="#003b51"
      />
    </div>
  </div>
</section>
