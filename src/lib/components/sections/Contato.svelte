<section id="contato" class="bg-white min-h-dvh py-20 px-8">
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
          class="bg-primary text-secondary py-1 px-4 text-xl uppercase w-[125px]"
          >Enviar</button
        >
      </div>
    </form>
  </div>
</section>
