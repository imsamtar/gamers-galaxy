<script>
  import Slide from "./Slide.svelte";
  import slides from "./slides";
</script>

<section class="slick-center-wrap">
  <div class="match-slider swiper-container">
    <div class="swiper-wrapper">
      {#each slides as slide}
        <Slide {slide} />
      {/each}
    </div>
  </div>
</section>
