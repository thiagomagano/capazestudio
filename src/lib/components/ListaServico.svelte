<script>
  import { Accordion } from "bits-ui";
  import { slide } from "svelte/transition";

  let { titulo, iconUrl, itens } = $props();
</script>

<div class="flex flex-col w-full">
  <div
    class="flex justify-between items-center px-3 pb-3 border-b-[3px] border-gray-500"
  >
    <h3 class="text-2xl lg:text-3xl font-medium uppercase">{titulo}</h3>
    <img src={iconUrl} alt="Icone da {titulo}" class="w-6" />
  </div>

  <Accordion.Root class="w-full">
    {#each itens as item, i}
      <Accordion.Item
        value="${i}"
        class="group border-b-[3px] border-gray-500 font-medium px-3 text-xl lg:text-xl"
      >
        <Accordion.Header>
          <Accordion.Trigger
            class="flex w-full flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>span>img]:rotate-180 [&[data-state=open]>span>img]:animate-none  "
          >
            {item.titulo}
            <span
              class="inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent transition-all hover:bg-dark-10"
            >
              <img
                src="/svg/carretdown.svg"
                class="size-4 transition-all duration-200 fill-white animate-pulse"
                alt="Icone de Mais"
              />
            </span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content
          transition={slide}
          transitionConfig={{ duration: 200 }}
          class="pb-[25px] text-base lg:text-base tracking-[-0.01em] font-long"
        >
          {item.desc}
        </Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</div>
