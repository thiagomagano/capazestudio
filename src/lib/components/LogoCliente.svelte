<script>
  let { cliente, imageUrl } = $props();
</script>

<img
  src="/svg/clientes/{imageUrl}.svg"
  alt="Logo {cliente}"
  class="max-w-none w-48"
/>
