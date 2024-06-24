<script>
  import Perfil from "../Perfil.svelte";

  const profiles = [
    {
      nome: "Alessandra",
      sobrenome: "Carcuchinski",
      cargo: "Estratégia",
      foto: "alessandra.jpg",
      desc: "Marketing a mais de 8 anos, passou por diversos segmentos. Seu maior foco é ser a porta-voz da sua empresa nas redes, buscando a melhor forma de te apresentar no mercado.",
    },
    {
      nome: "Douglas",
      sobrenome: "Alff",
      cargo: "Diretor de Arte",
      foto: "douglas.jpg",
      desc: "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aperiam, ipsa quisquam beatae harum animi alias cum? Minus sunt qui perspiciatis maiores soluta sed exercitationem nisi est. Voluptatibus dolore autem voluptates.",
    },
    {
      nome: "Marco",
      sobrenome: "Machado",
      cargo: "Diretor",
      foto: "marco.jpg",
      desc: "Gerente com longa experiência em projetos de impulsionamento de marcas e vendas, desenvolve soluções que aumentam a participação de mercado nas empresas por onde passa.",
    },
    {
      nome: "Thiago",
      sobrenome: "Magano",
      cargo: "Desenvolvedor",
      foto: "thiago.jpg",
      desc: "Guri da TI a mais de 10 anos, especializado em desenvolvimento web. Focado em agilidade e qualidade. Curioso, antenado e entusiasta de novas tecnologias!",
    },
  ];
</script>

<section id="time" class="bg-secondary py-28 px-14 grid grid-cols-3 gap-4">
  <div class="flex flex-col justify-between">
    <h2 class="text-4xl font-medium uppercase">Nosso Time</h2>
    <div class="flex flex-col gap-4">
      <img src="svg/Time.svg" alt="Icone do Time" class="size-10" />
      <p class="text-xl font-long">
        A Capaz, tem o complemento de 4 grandes núcleos, comercial, estratégico,
        criativo e tecnológico, conseguimos ter um olhar analítico de forma
        cuidadosa, além de trazer experiências que vivemos durante nossa
        trajetória separada. Conheça nosso time:
      </p>
    </div>
  </div>

  <div class="grid grid-cols-4 col-span-2 gap-8">
    {#each profiles as { nome, sobrenome, cargo, foto, desc }, i}
      <Perfil {nome} {sobrenome} {cargo} {foto} {desc} {i} />
    {/each}
  </div>
</section>
