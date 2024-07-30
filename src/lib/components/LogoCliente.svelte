<script>
  let { cliente, imageUrl } = $props();
</script>

<img
  src="/clientes/{imageUrl}"
  alt="Logo {cliente}"
  class="max-w-xs object-contain"
/>
