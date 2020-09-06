<script>
  import Match from "./Match.svelte";
  import Heading from "./Heading.svelte";
  import matches from "./matches";
</script>

<style>
  /* .hero_slider_wrap .container.v2 {
    margin-right: 0;
  } */

  .hero_slider.swiper-container {
    padding: 20px 0 48px;
  }
</style>

<div class="hero_slider_wrap">
  <Heading />
  <div class="container-fluid pr-0">
    <div class="row">
      <div class="col-md-12">
        <div class="hero_slider swiper-container">
          <div class="swiper-wrapper">
            {#each matches as match}
              <Match {...match} />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
