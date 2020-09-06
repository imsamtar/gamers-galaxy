<script>
  import ArrowLeft from "./ArrowLeft.svelte";
  import ArrowRight from "./ArrowRight.svelte";
</script>

<div class="container">
  <div class="row align-items-center">
    <div class="col-md-12">
      <div class="box_title v1">
        <div class="box_title_left">
          <h2>Last Matches</h2>
        </div>
        <div class="box_title_right">
          <!-- Add slider Arrows -->
          <div class="hero_slider_btn">
            <ArrowLeft />
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
