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

<section id="time" class="bg-black text-secondary">
  <div
    class="container mx-auto py-32 px-4 lg:px-12 flex flex-col gap-y-20 flex-wrap"
  >
    <div class="flex items-center justify-between w-full flex-wrap">
      <div class="flex flex-col gap-12">
        <h2 class="text-4xl font-medium uppercase text-nowrap pb-4 lg:pb-0">
          Nosso Time
        </h2>
        <img src="svg/Time.svg" alt="Icone do Time" class="size-10" />
      </div>

      <p class="text-xl font-long max-w-md">
        Somos a união de quatro grandes núcleos: comercial, estratégico,
        criativo e tecnológico. Temos um olhar analítico e trazemos grandes
        experiências adquiridas ao longo do tempo.
      </p>
    </div>

    <div
      class="flex gap-8 flex-wrap items-center justify-center md:justify-normal md:[&>*:nth-child(odd)]:pb-40"
    >
      {#each profiles as { nome, sobrenome, cargo, foto, desc }, i}
        <Perfil {nome} {sobrenome} {cargo} {foto} {desc} {i} />
      {/each}
    </div>
  </div>
</section>
