<script>
  const { link, logo, cliente } = $props();
</script>

<a
  href={link}
  class="bg-{cliente} px-10 py-6 w-full grid place-items-center"
  target="_blank"
>
  <img src={logo} alt="Logo {cliente}" class="object-contain w-40" />
</a>
