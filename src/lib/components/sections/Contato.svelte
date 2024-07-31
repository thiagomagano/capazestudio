<script>
  import { enhance } from "$app/forms";

  const { form } = $props();
  let creating = $state(false);
</script>

<section id="contato" class="bg-white py-16 lg:px-8 px-4">
  <div class="grid lg:grid-cols-2 gap-24 lg:gap-36 container mx-auto">
    <div
      class="flex justify-end gap-8 text-right w-full container relative self-end border-b-2 border-b-black"
    >
      <img
        src="/svg/Vamos-conversar.svg"
        alt="Seta apontando para formulário"
        class="size-8 lg:size-16 absolute top-4 left-0"
      />
      <h2
        class="text-[3.8rem] xl:text-[6.5rem] leading-tight font-medium uppercase pb-2"
      >
        Vamos <br /> Conversar
      </h2>
    </div>
    {#if !form?.success}
      <form
        class="flex flex-col gap-8"
        method="POST"
        use:enhance={() => {
          creating = true;
          return async ({ update }) => {
            creating = false;
            await update();
          };
        }}
      >
        <div class="relative z-0">
          <input
            type="text"
            id="nome"
            class="block py-3.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            name="nome"
            autocomplete="off"
            class:border-red-500={form?.semNome}
          />
          <label
            for="email"
            class="uppercase absolute text-lg lg:text-2xl pl-4 text-gray-500 duration-300 transform -translate-y-7 -translate-x-4 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            class:text-red-500={form?.semNome}>Nome</label
          >
          {#if form?.semNome}
            <p class="text-red-500 text-sm absolute right-0 top-0">
              {form?.msg}
            </p>
          {/if}
        </div>
        <div class="relative z-0">
          <input
            type="email"
            id="email"
            class="block py-3.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            class:border-red-500={form?.semEmail}
            placeholder=" "
            name="email"
            autocomplete="email"
          />
          <label
            for="email"
            class="uppercase absolute text-lg lg:text-2xl text-gray-500 duration-300 transform -translate-y-7 -translate-x-4 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            class:text-red-500={form?.semEmail}>Email</label
          >
          {#if form?.semEmail}
            <p class="text-red-500 text-sm absolute right-0">
              {form?.msg}
            </p>
          {/if}
        </div>

        <div class="flex flex-wrap lg:flex-nowrap gap-4 w-full">
          <div class="relative z-0 w-full">
            <input
              id="mensagem"
              class="font-long block py-3.5 px-0 w-full h-24 text-lg bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
              placeholder=""
              role="textbox"
              name="mensagem"
              autocomplete="off"
            />
            <label
              for="mensagem"
              class="uppercase absolute text-lg lg:text-2xl text-gray-500 duration-300 transform -translate-y-7 -translate-x-4 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              class:text-red-500={form?.semMsg}>Mensagem</label
            >
            {#if form?.semMsg}
              <p class="text-red-500 text-sm absolute right-0 top-0">
                {form?.msg}
              </p>
            {/if}
          </div>

          <button
            class="bg-primary text-white py-4 px-4 text-2xl uppercase self-end shrink-0 w-full lg:w-fit flex gap-4 items-center"
            disabled={creating}
          >
            {#if creating}
              <svg
                class="text-secondary-300 animate-spin"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path
                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-primary"
                >
                </path>
              </svg>
            {/if}
            {creating ? "Enviando proposta..." : "Enviar"}
          </button>
        </div>
      </form>
    {:else}
      <div class="grid place-items-center">
        <p class="text-xl font-body">
          Mensagem enviada com sucesso, obrigado! ✅
        </p>
      </div>
    {/if}
  </div>
</section>

<style lang="postcss">
  label {
    @apply pl-8;
  }

  input {
    @apply pl-2;
  }
</style>
