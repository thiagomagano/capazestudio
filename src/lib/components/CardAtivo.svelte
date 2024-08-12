<script>
  const { link, logo, cliente, cor } = $props();
</script>

<a
  href={link}
  class="px-10 py-6 w-full grid place-items-center"
  target="_blank"
  style="background-color: {cor};"
>
  <img src={logo} alt="Logo {cliente}" class="object-contain w-40" />
</a>

<style>
</style>
