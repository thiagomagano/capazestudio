<script>
  import scrollIntoView from "../../utils/scrollIntoView";
</script>

<nav
  class="bg-secondary text-black py-12 px-14 flex flex-row justify-between items-center h-[70px] w-full"
>
  <div>
    <img src="/svg/Logo-nav-bar.svg" alt="Logo Capaz Studio" class="w-48" />
  </div>

  <ul class="flex gap-6 uppercase items-center text-xl font-normal">
    <li>
      <a href="#servicos" on:click|preventDefault={scrollIntoView}>Serviços</a>
    </li>
    <li>
      <a href="#quemsomos" on:click|preventDefault={scrollIntoView}>
        Quem Somos</a
      >
    </li>
    <li><a href="#time" on:click|preventDefault={scrollIntoView}> Time</a></li>
    <li>
      <a href="#contato" on:click|preventDefault={scrollIntoView}> Contato</a>
    </li>
  </ul>
</nav>
