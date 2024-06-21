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
      desc: "Orientamos o seu negócio para se destacar nas redes sociais, essa presença possibilita se posicionar de forma clara e objetiva diante do seu público-alvo, gerando impacto, visibilidade e autoridade, além de expor todas as características essenciais da sua marca.",
    },
  ];

  const design = [
    {
      titulo: "Identidade Visual",
      desc: "Na apresentação de uma marca são imprescindíveis os itens principais de uma identidade visual, como logotipo, paleta de cores, grafismos, tipografia, peças ambientadas e um manual de uso.",
    },
    {
      titulo: "Materiais gráficos",
      desc: "Sendo os representantes tangíveis de uma marca, os materiais gráficos tem a vantagem de carregar todos os elementos de uma identidade visual e comunicar toda a mensagem necessária, como as embalagens, catálogos, cartões de visita, outdoors e outros.",
    },
    {
      titulo: "Campanhas",
      desc: "Criamos campanhas tanto offline quanto online, sempre buscando inovar e conectar marcas aos seus públicos de forma envolvente. No offline, utilizamos estratégias tradicionais como eventos, outdoors e panfletagem, combinando com ações criativas que despertam a curiosidade e o interesse das pessoas. Já no online, utilizamos o marketing digital, redes sociais, e-commerce e conteúdos relevantes para sua empresa, tudo planejado para aumentar o alcance.",
    },
  ];

  const tecnologia = [
    {
      titulo: "Sites",
      desc: "Sabemos que a porta de entrada da sua empresa é o seu site/ landing pages, aqui cuidamos para ser um lugar de confiança e credibilidade, com suas informações atualizadas para que seus clientes encontrem exatamente o que precisam na sua página, também auxiliamos na aquisição do seu domínio e em tudo que você necessita para essa presença online.",
    },
    {
      titulo: "E-commerce",
      desc: "Considerando a experiência para a empresa, desenvolvemos e implementamos seu e-commerces de forma personalizada e adaptável à sua realidade, visando impulsionar as suas vendas através da criação da sua loja online e facilitando a vida do seu consumidor.",
    },
    {
      titulo: "Sitemas",
      desc: "Temos a visão que uma empresa ter uma boa organização, é necessário sair do analógico e vir para o digital, aqui conseguimos criar sistema de controle, sistemas web com a melhor tecnologia do mercado utilizando cloud e sistemas que se adequam a sua realidade, sua empresa sem organização acaba perdendo grande parte da sua agilidade.",
    },
  ];
</script>

<section
  id="servicos"
  class="bg-black text-white grid grid-cols-4 place-items-center px-12 py-36 gap-8 min-h-[calc(80svh)]"
>
  <div class="flex gap-8 flex-col">
    <h2 class="text-5xl font-medium uppercase pb-16">Serviços</h2>
    <img src="/svg/Servicos.svg" alt="Icone de serviços" class="size-10" />
    <p class="text-2xl">
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
  <ListaServico titulo="Tecnologia" iconUrl="/svg/Dev.svg" itens={tecnologia} />
</section>
