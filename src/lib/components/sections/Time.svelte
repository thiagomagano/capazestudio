<script>
  import Perfil from "../Perfil.svelte";

  const profiles = [
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
      nome: "Marco",
      sobrenome: "Machado",
      cargo: "Sócio-Diretor",
      foto: "marco.jpg",
      desc: "Gerente com longa experiência em projetos de impulsionamento de marcas e vendas, desenvolve soluções que aumentam a participação de mercado nas empresas por onde passa.",
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

<section id="time" class="bg-secondary py-28 px-14 grid grid-cols-3 gap-4">
  <div class="flex flex-col justify-between pr-44">
    <h2 class="text-4xl font-medium uppercase">Nosso Time</h2>
    <div class="flex flex-col gap-4">
      <img src="svg/Time.svg" alt="Icone do Time" class="size-10" />
      <p class="text-xl font-long text-justify">
        Somos a união de quatro grandes núcleos, comercial, estratégico,
        criativo e tecnológico, temos um olhar analítico e trazemos grandes
        experiências adquiridas com o tempo.
      </p>
    </div>
  </div>

  <div class="grid grid-cols-4 col-span-2 gap-8">
    {#each profiles as { nome, sobrenome, cargo, foto, desc }, i}
      <Perfil {nome} {sobrenome} {cargo} {foto} {desc} {i} />
    {/each}
  </div>
</section>
