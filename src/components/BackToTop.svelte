<script>
  import { fade } from "svelte/transition";

  let shown;
  let scrollY;

  function scrollToTop() {
    let i = 10;
    window.scrollTo(0, scrollY - i);
    let interval = setInterval(() => {
      if (scrollY == 0) return clearInterval(interval);
      window.scrollTo(0, scrollY - i);
      i += 3;
    }, 0);
  }

  $: shown = scrollY > 600;
</script>

<style>
  .back-to-top {
    display: block;
  }
</style>

<svelte:window bind:scrollY />

{#if shown}
  <span
    class="back-to-top"
    transition:fade={{ duration: 200 }}
    on:click={scrollToTop}>
    <i class="fa fa-angle-up" />
  </span>
{/if}
