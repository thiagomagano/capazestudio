<script>
  import Headline from "../lib/components/Headline.svelte";

  import Navbar from "../lib/components/Navbar.svelte";
</script>

<Navbar />

<main>
  <Headline />

  <section id="servicos" class="h-screen">
    <h2>Serviços</h2>
    <ul>
      <li>Publicidade</li>
      <li>Design</li>
      <li>Desenvolvimento</li>
    </ul>
  </section>

  <section id="quemsomos" class="h-screen">
    <h2>Por Pessoas, para pessoas. somos capazes, juntos.</h2>
    <p>
      Somos especialistas em guiar caminhos. Nascemos no digital mas um caminho
      longo já foi trilhado..
    </p>
  </section>

  <section id="time" class="h-screen">
    <h2>Nosso Time</h2>
    <ul>
      <li>Alessandra Carcuchinski</li>
      <li>Douglas Alff</li>
      <li>Marco Machado</li>
      <li>Thiago Magano</li>
    </ul>
  </section>

  <section id="contato" class="h-screen">
    <h2>Vamos Conversar</h2>
  </section>
</main>

<footer>
  <p>Capaz Studio ©️2024</p>
</footer>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
