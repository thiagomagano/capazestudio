<script>
  /**
   * Open boolean
   * @type {boolean}
   * @default false
   */
  export let open = false;
  /**
   * Hamburger type
   * @type {HamburgerType}
   * @default "spin"
   */
  export let type = "spin";
  /**
   * AriaLabel string
   * @type {string}
   * @default "Hamburger menu"
   */
  export let ariaLabel = "Hamburger menu";
</script>

<button
  class="hamburger hamburger--{type}"
  aria-label={ariaLabel}
  class:is-active={open}
  on:click
  on:click={() => (open = !open)}
>
  <span class="hamburger-box">
    <span class="hamburger-inner"> </span>
  </span>
</button>

<style>
  .hamburger {
    padding: var(--padding, 15px);
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }
  .hamburger:active {
    background-color: transparent !important;
  }
  .hamburger:hover {
    opacity: var(--hover-opacity, 0.7);
  }
  .hamburger.is-active:hover {
    opacity: var(--hover-opacity-active, var(--hover-opacity, 0.7));
  }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: var(--active-color, var(--color, black));
  }

  .hamburger-box {
    width: var(--layer-width, 30px);
    height: calc(var(--layer-height, 4px) * 3 + var(--layer-spacing, 6px) * 2);
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: var(--layer-height, 4px) / -2;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: var(--layer-width, 30px);
    height: var(--layer-height, 4px);
    background-color: var(--color, black);
    border-radius: var(--border-radius, 4px);
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1);
  }
  .hamburger-inner::after {
    bottom: calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1);
  }

  /*
    * Spin
    */
  .hamburger--spin .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spin .hamburger-inner::before {
    transition:
      top 0.1s 0.25s ease-in,
      opacity 0.1s ease-in;
  }
  .hamburger--spin .hamburger-inner::after {
    transition:
      bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--spin.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--spin.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition:
      top 0.1s ease-out,
      opacity 0.1s 0.12s ease-out;
  }
  .hamburger--spin.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition:
      bottom 0.1s ease-out,
      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
</style>
