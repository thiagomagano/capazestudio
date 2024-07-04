<script>
  import ListaServico from "$lib/components/ListaServico.svelte";

  const publicidade = [
    {
      titulo: "Naming",
      desc: "Criamos nomes estratégicos para marcas que estão iniciando ou pretendem se reposicionar no mercado, assim como definimos estratégias de usernames e domínios, além da pesquisa no INPI.",
    },
    {
      titulo: "Branding",
      desc: "Produzimos e gerimos estratégias que marcam, fazendo o público lembrar de uma empresa. Criamos a imagem desejada na mente dos consumidores, comunicando os atributos desejados pela marca.",
    },
    {
      titulo: "Presença Online",
      desc: "Orientamos o seu negócio para se destacar nas mídias sociais, essa presença possibilita se posicionar de forma clara e objetiva diante do seu público-alvo, gerando impacto, visibilidade e autoridade, além de expor todas as características essenciais da sua marca.",
    },
  ];

  const design = [
    {
      titulo: "Identidade Visual",
      desc: "Na apresentação de uma marca são imprescindíveis os itens principais de uma identidade visual, como logotipo, paleta de cores, grafismos, tipografia, peças ambientadas e um manual de uso.",
    },
    {
      titulo: "Materiais Gráficos",
      desc: "Sendo os representantes tangíveis de uma marca, os materiais gráficos têm a vantagem de carregar todos os elementos de uma identidade visual e comunicar toda a mensagem necessária, como as embalagens, catálogos, cartões de visita, outdoors e outros.",
    },
    {
      titulo: "Campanhas",
      desc: "Criamos campanhas tanto offline quanto online, sempre buscando conectar marcas aos seus públicos de forma envolvente. No offline, utilizamos estratégias tradicionais como eventos, outdoors e panfletagem, combinando com ações criativas que despertam a curiosidade e o interesse das pessoas. Já no online, utilizamos o marketing digital, mídias sociais, e-commerces e conteúdos relevantes para sua empresa, tudo planejado para aumentar o alcance da marca.",
    },
  ];

  const tecnologia = [
    {
      titulo: "Landing Page",
      desc: "Landing pages são a ferramenta ideal para apresentar um produto ou serviço específico, com foco em conversão. Através de um design estratégico e conteúdo persuasivo, elas capturam a atenção do visitante e o guiam em direção à ação desejada, seja uma compra, um cadastro ou um contato.",
    },
    {
      titulo: "Site Multipáginas",
      desc: "Um site multipágina/institucional é a solução completa para apresentar sua empresa online. Com ele, você comunica sua história, valores e serviços de forma clara e organizada, conquistando a confiança do seu público e gerando mais oportunidades de negócio.",
    },
    {
      titulo: "E-commerce",
      desc: "Pequenos e-commerces são a porta de entrada para o mundo das vendas online. Com eles, você alcança novos clientes, aumenta sua visibilidade e impulsiona seus resultados, sem a necessidade de grandes investimentos. Através de uma plataforma intuitiva e recursos personalizados, você cria uma loja virtual completa, pronta para vender seus produtos e conquistar o mercado digital.",
    },
  ];
</script>

<section id="servicos" class="bg-black text-white">
  <div
    class="grid grid-cols-1 px-5 py-8 lg:grid-cols-4 lg:px-12 lg:py-36 gap-8"
  >
    <div class="flex gap-8 flex-col">
      <h2 class="font-medium uppercase text-3xl lg:text-5xl lg:pb-16">
        Serviços
      </h2>
      <img src="/svg/Servicos.svg" alt="Icone de serviços" class="size-10" />
      <p class="text-lg lg:text-2xl font-long">
        Guiamos nossos clientes em todos os caminhos necessários relacionados a
        uma marca. Seja relacionado a parte estratégica, visual ou tecnológica.
      </p>
    </div>

    <ListaServico
      titulo="Publicade"
      iconUrl="/svg/publi-icon.svg"
      itens={publicidade}
    />
    <ListaServico titulo="Design" iconUrl="/svg/Design.svg" itens={design} />
    <ListaServico
      titulo="Tecnologia"
      iconUrl="/svg/Dev.svg"
      itens={tecnologia}
    />
  </div>
</section>
