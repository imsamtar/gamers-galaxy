<script>
  import SwipersSetup from "../../Swipers/Setup.svelte";
  import LastMatchSlider from "./LastMatchSlider/LastMatchSlider.svelte";
  import Welcome from "./Welcome.svelte";
</script>

<style>
  .hero_section {
    margin-top: 75px;
    position: relative;
    padding-top: 40px;
  }
</style>

<SwipersSetup />

<section class="hero_section">
  <Welcome />
  <LastMatchSlider />
</section>
