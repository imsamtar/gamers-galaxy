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
    font-size: 24px;
    width: 45px;
    height: 45px;
    line-height: 42px;
    text-align: center;
    color: #4de2c1;
    display: block;
    position: fixed;
    bottom: 30px;
    right: 20px;
    z-index: 999999999999;
    border-radius: 50%;
    background: #13171d;
  }
  .back-to-top i {
    color: #fff;
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
