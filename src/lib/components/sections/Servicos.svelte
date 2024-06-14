<script>
  import ListaServico from "$lib/components/ListaServico.svelte";
</script>

<section
  id="servicos"
  class="bg-black text-white grid grid-cols-4 place-items-center px-12 py-36 gap-8 h-auto"
>
  <div class="flex gap-8 flex-col">
    <h2 class="text-5xl font-medium uppercase pb-16">Serviços</h2>
    <img src="/svg/Servicos.svg" alt="Icone de serviços" class="size-10" />
    <p class="text-2xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi minima
      officiis aliquam harum voluptatibus ut fugit doloribus, magni sequi neque.
      Totam officiis deleniti consequuntur nihil veritatis alias optio
      consectetur libero? Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Animi minima officiis aliquam harum voluptatibus ut fugit doloribus,
      magni sequi neque. Totam officiis deleniti consequuntur nihil veritatis
      alias optio consectetur libero?
    </p>
  </div>

  <ListaServico
    titulo="Publicade"
    iconUrl="/svg/publi-icon.svg"
    itens={["Naming", "Branding", "Presença Online"]}
  />
  <ListaServico
    titulo="Design"
    iconUrl="/svg/Design.svg"
    itens={["Identidade Visual", "Materias Gráficos", "Campanhas"]}
  />
  <ListaServico
    titulo="Desenvolvimento"
    iconUrl="/svg/Dev.svg"
    itens={["Sites", "E-commerce", "Sistemas"]}
  />
</section>
