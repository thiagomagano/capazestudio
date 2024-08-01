<script>
  import LogoCliente from "$lib/components/LogoCliente.svelte";

  import listaClientes from "$lib/data/clientes.js";
</script>

<section class=" bg-gray-100">
  <div class="flex overflow-hidden space-x-4">
    <div class="flex animate-loop-scroll space-x-4 group-hover:paused">
      {#each listaClientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each listaClientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each listaClientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
    </div>
    <div
      class="flex animate-loop-scroll space-x-4 group-hover:paused"
      aria-hidden="true"
    >
      {#each listaClientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each listaClientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each listaClientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
    </div>
  </div>
</section>
