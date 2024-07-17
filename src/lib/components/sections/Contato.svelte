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
    <form action="" class="flex flex-col gap-8">
      <div class="relative z-0">
        <input
          type="text"
          id="floating_standard"
          class="block py-3.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
        />
        <label
          for="floating_standard"
          class="uppercase absolute text-lg lg:text-2xl pl-4 text-gray-500 duration-300 transform -translate-y-7 -translate-x-4 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >Nome</label
        >
      </div>
      <div class="relative z-0">
        <input
          type="email"
          id="email"
          class="block py-3.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
        />
        <label
          for="email"
          class="uppercase absolute text-lg lg:text-2xl text-gray-500 duration-300 transform -translate-y-7 -translate-x-4 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >Email</label
        >
      </div>

      <div class="flex flex-wrap lg:flex-nowrap gap-4 w-full">
        <div class="relative z-0 w-full">
          <input
            id="textarea"
            class="font-long block py-3.5 px-0 w-full h-24 text-lg bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=""
            role="textbox"
          />
          <label
            for="textarea"
            class="uppercase absolute text-lg lg:text-2xl text-gray-500 duration-300 transform -translate-y-7 -translate-x-4 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:-translate-x-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >Mensagem</label
          >
        </div>

        <button
          class="bg-primary text-white py-4 px-4 text-2xl uppercase self-end shrink-0 w-full lg:w-fit"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</section>

<style lang="postcss">
  label {
    @apply pl-8;
  }

  input {
    @apply pl-2;
  }

  a {
    @apply hover:text-primary hover:underline focus:text-primary focus:underline;
  }
</style>
