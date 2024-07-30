<script>
  import "../app.css";
  import Navbar from "$lib/components/sections/Navbar.svelte";

  import Rodape from "$lib/components/sections/Rodape.svelte";
</script>

<Navbar />
<slot />
<Rodape />
