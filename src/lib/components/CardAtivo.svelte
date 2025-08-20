<script>
  const { link, logo, cliente, cor } = $props();
</script>

<a
  href={link}
  class="px-10 py-6 w-full grid place-items-center h-[90px]"
  target="_blank"
  style="background-color: {cor};"
>
  <img
    src={logo}
    alt="Logo {cliente}"
    class="object-contain max-w-[200px] lg:max-w-full"
  />
</a>

<style>
</style>
