<script>
  const numeroTelefone = "99999999";
</script>

<section id="contato" class="bg-white py-16 lg:px-8 px-4">
  <div class="grid lg:grid-cols-2 gap-24 lg:gap-36 container mx-auto">
    <div
      class="flex justify-end gap-8 text-right w-full border-b-2 pb-[1.2rem] border-b-black container relative self-start"
    >
      <img
        src="/svg/Vamos-conversar.svg"
        alt="Seta apontando para formulário"
        class="size-10 lg:size-16 absolute top-0 left-0"
      />
      <h2
        class="text-[3.8rem] leading-tight xl:text-9xl font-semibold uppercase"
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

<footer
  class="text-base lg:text-2xl flex flex-col lg:grid lg:grid-cols-2 bg-white pt-20 pb-12 px-4 uppercase gap-x-32 gap-y-8 font-medium container mx-auto"
>
  <div class="flex justify-between gap-16 col-start-1 w-full">
    <div>
      <div class="flex items-center gap-3 pb-2 justify-center">
        <img src="/svg/Local.svg" alt="Seta para baixo" class="size-4 mt-1" />
        <a href=" https://g.co/kgs/t7zLM3k" class="text-nowrap">
          Porto Alegre / RS
        </a>
      </div>
      <div class="flex items-center gap-3">
        <img
          src="/svg/Telefone.svg"
          alt="Seta para baixo"
          class="size-4 mt-1"
        />
        <a
          href="https://api.whatsapp.com/send?phone={numeroTelefone}"
          target="_blank"
        >
          (51) 99999.9999
        </a>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-3 pb-2">
        <img
          src="/svg/Instagram-Linkedin.svg"
          alt="Seta para baixo"
          class="size-3 lg:size-4 mt-1"
        />
        <a href="https://instagram.com/capazestudio" target="_blank">
          Instragram
        </a>
      </div>
      <div class="flex items-center gap-3">
        <img
          src="/svg/Instagram-Linkedin.svg"
          alt="Seta para baixo"
          class="size-3 lg:size-4 mt-1"
        />
        <a
          href="https://www.linkedin.com/company/capaz-est%C3%BAdio"
          target="_blank">LinkedIn</a
        >
      </div>
    </div>
  </div>

  <div class="col-start-2"></div>

  <div class="flex justify-between items-center flex-wrap">
    <div>
      <p>Mande uma Mensagem</p>
      <p class="text-sm">contato@capazestudio.com.br</p>
    </div>

    <div>
      <p class="text-transparent">-</p>
      <p>©️2024</p>
    </div>
  </div>

  <div
    class="flex lg:gap-16 gap-4 justify-between items-end lg:items-start w-full flex-wrap"
  >
    <img
      src="/svg/logo-rodape.svg"
      alt="Logo Capaz Estúdio"
      class=" size-24 lg:size-32"
    />
    <div class="flex flex-col items-end">
      <img
        src="/svg/Capaz-rodape.svg"
        alt="Logo Capaz Estúdio"
        class="size-28 lg:size-32"
      />
      <h4 class="uppercase text-right text-xl -mt-6 lg:mt-0">Estúdio</h4>
    </div>
  </div>
</footer>

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
