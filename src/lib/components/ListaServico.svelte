<script>
  import { Accordion } from "bits-ui";
  import { slide } from "svelte/transition";

  let { titulo, iconUrl, itens } = $props();
</script>

<div class="flex flex-col w-full">
  <div
    class="flex justify-between items-center px-3 pb-8 border-b-[3px] border-gray-500"
  >
    <h3 class="text-4xl font-normal uppercase">{titulo}</h3>
    <img src={iconUrl} alt="Icone da {titulo}" class="w-6" />
  </div>

  <Accordion.Root class="w-full">
    {#each itens as item, i}
      <Accordion.Item
        value="${i}"
        class="group border-b-[3px] border-gray-500 px-3 text-2xl"
      >
        <Accordion.Header>
          <Accordion.Trigger
            class="flex w-full flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>span>svg]:rotate-180 "
          >
            {item}
            <span
              class="inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent transition-all hover:bg-dark-10"
            >
              <!-- <CaretDown class="size-[18px] transition-all duration-200" /> -->
              <img
                src="/svg/INFOS-mais.svg"
                class="size-4 transition-all duration-200"
                alt="Icone de Mais"
              />
            </span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content
          transition={slide}
          transitionConfig={{ duration: 200 }}
          class="pb-[25px] text-base tracking-[-0.01em]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          temporibus amet. Sit maxime ea aspernatur odit aperiam nam labore
          numquam voluptate earum animi in placeat, reprehenderit illo. Ex,
          dolorum itaque?
        </Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</div>
