<script>
  import "../app.css";

  import { page } from "$app/stores";
  import Navbar from "$lib/components/sections/Navbar.svelte";

  import Rodape from "$lib/components/sections/Rodape.svelte";
</script>

<Navbar home={$page.route.id === "/" ? false : true} />
<slot />
<Rodape />
