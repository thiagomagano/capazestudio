<script>
  import Perfil from "../Perfil.svelte";

  const profiles = [
    {
      nome: "Marco",
      sobrenome: "Machado",
      cargo: "Sócio-Diretor",
      foto: "marco.jpg",
      desc: "Gerente com longa experiência em projetos de impulsionamento de marcas e vendas, desenvolve soluções que aumentam a participação de mercado nas empresas por onde passa.",
    },
    {
      nome: "Alessandra",
      sobrenome: "Carcuchinski",
      cargo: "Estrategista",
      foto: "alessandra.jpg",
      desc: "Marketing há mais de oito anos, passou por diversos segmentos. Seu maior foco é ser a porta-voz das estratégias das marcas, buscando a melhor forma de apresentá-las no mercado.",
    },
    {
      nome: "Douglas",
      sobrenome: "Alff",
      cargo: "Designer Gráfico",
      foto: "douglas.jpg",
      desc: "Dez anos de experiência na área do design, cria projetos visuais que conectam marcas a seus consumidores de forma assertiva e estratégica, agregando valor e gerando resultados positivos.",
    },
    {
      nome: "Thiago",
      sobrenome: "Magano",
      cargo: "Desenvolvedor",
      foto: "thiago.jpg",
      desc: "Guri da TI há mais de 10 anos, especializado em desenvolvimento web. Focado em agilidade e qualidade. Curioso, antenado e entusiasta de novas tecnologias.",
    },
  ];
</script>

<section id="time" class="bg-black text-secondary py-32">
  <div class="container mx-auto px-4 lg:px-0 space-y-32 flex-wrap">
    <div
      class="grid 2xl:grid-cols-4 lg:grid-cols-2 w-full grid-cols-1 gap-10 xl:gap-0"
    >
      <div class="flex flex-col justify-between">
        <h2
          class="text-4xl font-medium uppercase text-nowrap pb-4 xl:pb-0 col-start-1"
        >
          Nosso Time
        </h2>
        <img src="svg/Time.svg" alt="Icone do Time" class="size-10" />
      </div>

      <p
        class="text-[1.25rem] leading-tight font-long 2xl:col-start-4 max-w-md xl:max-w-[350px] ml-0 xl:ml-8"
      >
        Somos a união de quatro grandes núcleos: comercial, estratégico,
        criativo e tecnológico. Temos um olhar analítico e trazemos grandes
        experiências adquiridas ao longo do tempo.
      </p>
    </div>

    <div
      class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-10 items-center justify-between md:justify-normal md:[&>*:nth-child(odd)]:pb-40"
    >
      {#each profiles as { nome, sobrenome, cargo, foto, desc }, i}
        <Perfil {nome} {sobrenome} {cargo} {foto} {desc} {i} />
      {/each}
    </div>
  </div>
</section>
