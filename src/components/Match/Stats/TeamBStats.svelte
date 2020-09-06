<script>
  import BStats from "./BStats.svelte";
  import team_b_stats from "./team_b_stats";

  const icons = [
    "assets/img/img_22.png",
    "assets/img/img_23.png",
    "assets/img/img_24.png",
    "assets/img/img_25.png",
    "assets/img/img_26.png",
    "assets/img/img_27.png",
  ];
</script>

<div class="col-xl-6 col-lg-12">
  <div class="point_box_right maf">
    <div class="team_b_name">
      <img src="assets/img/img_44.png" alt="AnImage" />
      <p>PACT</p>
    </div>
  </div>
  <div class="user_match_stat_wrap">
    <div class="user_match_statistics v2">
      <div class="row w-100 align-items-center no-gutters">
        <div
          class="col-xl-7 offset-xl-0 col-lg-7 offset-lg-5 col-md-7 offset-md-5
            col-6 offset-6">
          <div class="user_stat_list_wrap v2">
            <div class="user_stat_list">
              <ul class="n1">
                {#each icons as src}
                  <li>
                    <div class="user_stat_list_top">
                      <img {src} alt="AnImage" />
                    </div>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {#each team_b_stats as stats}
      <BStats {stats} />
    {/each}
  </div>
</div>
