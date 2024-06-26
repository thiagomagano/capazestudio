<script lang="ts">
  import { tick } from "svelte";

  type Props = {
    texts: string[]; // Array of strings to be displayed
    repeat?: number; // Set to 0 for infinite loop.
    typeSpeed?: number; // How fast the text is typed (in ms/char)
    deleteSpeed?: number; // How fast the text is deleted (in ms/char)
    blinkDuration?: number; // How long the pipe is displayed each "blink" (in ms)
    blinkCount?: number; // How many times the pipe is displayed after the text is typed
    cl?: string;
  } & (
    | {
        waitBetweenTexts?: number; // How long to wait before starting to type the next text (in ms)
        blinksBetweenTexts?: never;
      }
    | {
        waitBetweenTexts?: never;
        blinksBetweenTexts: number; // How many times the pipe is displayed between texts
      }
  );

  let {
    texts,
    repeat = 0,
    typeSpeed = 60,
    deleteSpeed = 40,
    blinkDuration = 600,
    blinkCount = 3,
    waitBetweenTexts = 150,
    cl = "",
    blinksBetweenTexts,
  }: Props = $props();

  let caret: HTMLSpanElement;
  let blinking = $state(false);
  let iteration = $state(blinkCount - 0.5);
  let textDisplayed = $state(" ");
  let cla = $state(cl);

  let timeout: ReturnType<typeof setTimeout>;

  $effect(() => {
    typewriter(texts, repeat);
    return () => clearTimeout(timeout);
  });

  const sleep = (ms: number) => {
    return new Promise((resolve) => {
      timeout = setTimeout(resolve, ms);
    });
  };

  const blink = async () => {
    blinking = true;
    await tick();
    await Promise.all(caret.getAnimations().map((a) => a.finished));
    blinking = false;
  };

  async function typewriter(textArr: string[], iterations: number) {
    if (!textArr.length) return;

    for (let i = 0; iterations === 0 || i < iterations; i++) {
      for (const text of textArr) {
        // Type text
        for (let k = 0; k <= text.length; k++) {
          textDisplayed = text.slice(0, k);
          await sleep(typeSpeed);
        }

        // Blink for specified duration
        await blink();

        // Delete text
        for (let k = 0; k <= text.length; k++) {
          textDisplayed = text.slice(0, text.length - k);
          await sleep(deleteSpeed);
        }

        if (!blinksBetweenTexts) {
          await sleep(waitBetweenTexts);
        } else {
          iteration = blinksBetweenTexts;
          await blink();
          iteration = blinkCount - 0.5;
        }
      }
    }
  }
</script>

<h1 class={cla}>
  {textDisplayed}
  <span
    bind:this={caret}
    class:blinking
    style="--blink-duration: {blinkDuration}ms; --blink-count: {iteration};"
  ></span>
</h1>

<style>
  .blinking {
    animation: blink var(--blink-duration) step-start
      calc(var(--blink-duration) / 4) var(--blink-count);
    border-right: #fe5f2d 3px solid;
    z-index: -154545;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
