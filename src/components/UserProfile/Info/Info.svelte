<script>
  import Teams from "./Teams.svelte";
  import InfoBox from "./InfoBox.svelte";
  import About from "./About.svelte";
  import LastMatches from "./LastMatches.svelte";
</script>

<section class="info_section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="box_title">
          <div class="box_title_left">
            <h2>Info</h2>
          </div>
          <div class="box_title_right">
            <p>Celrate statistics <span>(Past 3 months)</span></p>
          </div>
        </div>
        <InfoBox />
      </div>
      <div class="col-lg-6">
        <Teams />
        <About />
      </div>
    </div>
    <div class="row maf_v1">
      <div class="col-md-12">
        <div class="row">
          <LastMatches />
        </div>
      </div>
      <div class="col-md-12">
        <div class="box_title v2">
          <div class="box_title_left">
            <h2>Matches</h2>
          </div>
          <div class="box_title_right">
            <div class="step_switch_box">
              <h5>Advanced Statistics</h5>
              <div class="switch_wrap">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round_box" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="page_num">
          <ul>
            <li>
              <a href="/"><img src="assets/img/prev.png" alt="AnImage" /></a>
            </li>
            <li><a href="/">1</a></li>
            <li><a href="/">2</a></li>
            <li><a class="active" href="/">3</a></li>
            <li><a href="/">4</a></li>
            <li><a href="/">5</a></li>
            <li><a href="/">...</a></li>
            <li><a href="/">10</a></li>
            <li>
              <a href="/"><img src="assets/img/next.png" alt="AnImage" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
