<script>
  import { onMount } from "svelte";

  export let segment;

  let preloader;
  let mounted;
  let hidden = false;

  onMount(function () {
    mounted = true;
  });

  function reset() {
    mounted = hidden = false;
    mounted = true;
  }

  $: reset(segment);

  $: if (mounted && preloader) {
    setTimeout(function () {
      hidden = true;
    }, 500);
  }
</script>

<style>
  .proloader {
    transition: opacity 500ms, z-index 600ms 0ms;
  }
  .proloader.hidden {
    opacity: 0;
    z-index: -1000;
    transform: all 0ms;
  }
</style>

<div class="proloader" bind:this={preloader} class:hidden>
  <div class="loader_34">
    <!-- Preloader Elements -->
    <div class="ytp-spinner">
      <div class="ytp-spinner-container">
        <div class="ytp-spinner-rotator">
          <!-- Preloader Container Left Begin -->
          <div class="ytp-spinner-left">
            <!-- Preloader Body Left -->
            <div class="ytp-spinner-circle" />
          </div>
          <!-- Preloader Container Left End -->
          <!-- Preloader Container Right Begin -->
          <div class="ytp-spinner-right">
            <!-- Preloader Body Right -->
            <div class="ytp-spinner-circle" />
          </div>
          <!-- Preloader Container Right End -->
        </div>
      </div>
    </div>
  </div>
</div>
