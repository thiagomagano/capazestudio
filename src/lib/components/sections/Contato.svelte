<script>
  const numeroTelefone = "99999999";
</script>

<section id="contato" class="bg-white py-20 px-8">
  <div class="grid grid-cols-2 gap-20">
    <div class="flex justify-between border-b-2 border-b-gray-500 pb-4">
      <img
        src="/svg/Vamos-conversar.svg"
        alt="Seta apontando para formulário"
        class="size-16"
      />
      <h2 class="text-8xl font-semibold uppercase text-right">
        Vamos <br /> Conversar
      </h2>
    </div>
    <form action="" class="flex flex-col gap-8">
      <div class="relative z-0">
        <input
          type="text"
          id="floating_standard"
          class="block py-3.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
        />
        <label
          for="floating_standard"
          class="uppercase absolute text-2xl pl-4 text-gray-500 duration-300 transform -translate-y-8 -translate-x-4 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >Nome</label
        >
      </div>
      <div class="relative z-0">
        <input
          type="email"
          id="email"
          class="block py-3.5 px-0 w-full text-lg bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder=" "
        />
        <label
          for="floating_standard"
          class="uppercase absolute text-2xl text-gray-500 duration-300 transform -translate-y-8 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >Email</label
        >
      </div>

      <div class="flex gap-4 w-full">
        <textarea
          class="border-b-gray-500 border-b-2 text-2xl px-6 py-4 uppercase w-full"
          placeholder="Mensagem"
        ></textarea>
        <button
          class="bg-primary text-secondary py-5 px-4 text-2xl uppercase w-[125px] self-end"
          >Enviar</button
        >
      </div>
    </form>
  </div>
</section>

<footer
  class="grid grid-cols-2 bg-white py-20 px-8 text-2xl uppercase gap-x-32 gap-y-8 font-medium"
>
  <div class="flex justify-between gap-16 col-start-1 w-full">
    <div>
      <div class="flex items-center gap-3 pb-2 justify-center">
        <img src="/svg/Local.svg" alt="Seta para baixo" class="size-4 mt-1" />
        <a href=" https://g.co/kgs/t7zLM3k"> Porto Alegre / RS </a>
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
          class="size-4 mt-1"
        />
        <a href="https://instagram.com/capazestudio" target="_blank">
          Instragram
        </a>
      </div>
      <div class="flex items-center gap-3">
        <img
          src="/svg/Instagram-Linkedin.svg"
          alt="Seta para baixo"
          class="size-4 mt-1"
        />
        <a
          href="https://www.linkedin.com/company/capaz-est%C3%BAdio"
          target="_blank">LinkedIn</a
        >
      </div>
    </div>
  </div>

  <div class="col-start-2"></div>

  <div class="flex justify-between items-center">
    <div>
      <p>Mande uma Mensagem</p>
      <p>contato@capazestudio.com.br</p>
    </div>

    <div>
      <p class="text-transparent">-</p>
      <p>©️2024</p>
    </div>
  </div>

  <div class="flex gap-16 justify-between w-full">
    <img src="/svg/logo-rodape.svg" alt="Logo Capaz Estúdio" class="size-32" />
    <div>
      <img
        src="/svg/Capaz-rodape.svg"
        alt="Logo Capaz Estúdio"
        class="size-32"
      />
      <h4 class="uppercase text-right">Estúdio</h4>
    </div>
  </div>
</footer>
