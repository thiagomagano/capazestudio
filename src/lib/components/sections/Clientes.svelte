<script>
  import LogoCliente from "$lib/components/LogoCliente.svelte";
  const clientes = [
    {
      cliente: "Latina Sul",
      imageUrl: "latinasul.svg",
    },
    {
      cliente: "Embutidos Esperança",
      imageUrl: "esperanca.png",
    },
  ];
</script>

<section class="py-12 bg-secondary space-y-12">
  <div class="flex justify-between items-center container mx-auto">
    <h2 class="uppercase text-[44px]">São Capazes</h2>
    <img src="/svg/icon-clientes.svg" alt="Icone de Clientes" class="size-12" />
  </div>

  <div class="flex overflow-hidden space-x-4">
    <div class="flex animate-loop-scroll space-x-4 group-hover:paused">
      {#each clientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each clientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each clientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each clientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
    </div>
    <div
      class="flex animate-loop-scroll space-x-4 group-hover:paused"
      aria-hidden="true"
    >
      {#each clientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each clientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each clientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
      {#each clientes as { cliente, imageUrl }}
        <LogoCliente {cliente} {imageUrl} />
      {/each}
    </div>
  </div>
</section>
