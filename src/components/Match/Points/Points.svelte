<script>
  import points from "./points";
  import Round from "./Round.svelte";
</script>

<section class="simple_section">
  <div class="container">
    <div class="row">
      <div class="col-xl-10 offset-xl-1 col-lg-12">
        <div class="point_box v2">
          <div class="point_box_left">
            <div class="team_a_name">
              <img src="assets/img/img_45.png" alt="AnImage" />
              <p>Singularity</p>
            </div>
            <div class="team_a_point"><span class="text_green">2</span></div>
          </div>
          <div class="point_box_center">
            <h2>15:27</h2>
          </div>
          <div class="point_box_right">
            <div class="team_b_point"><span class="text_red">1</span></div>
            <div class="team_b_name">
              <img src="assets/img/img_44.png" alt="AnImage" />
              <p>PACT</p>
            </div>
          </div>
        </div>
        <div class="maf_team_name">
          <p>Game 1</p>
          <select class="dropdown_select">
            <option value="1">Dust 2</option>
            <option value="1">Dust 2</option>
            <option value="1">Dust 2</option>
          </select>
        </div>
        <div class="result_sum_wrap">
          <ul class="res_team">
            <li>Pact</li>
            <li>Rounds</li>
            <li>Singularity</li>
          </ul>
          <div class="result_sum">
            {#each points as pointz, index}
              <Round points={pointz} round={index + 1} />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--Simple section ends  -->
