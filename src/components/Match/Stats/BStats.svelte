<script>
  export let stats;
</script>

<div class="user_match_statistics v2 style2">
  <div class="row w-100 align-items-center no-gutters">
    <div
      class="col-xl-7 col-lg-7 col-md-7 col-6 order-xl-1 order-lg-2 order-md-2
        order-2">
      <div class="user_stat_list_wrap">
        <div class="user_stat_list">
          <ul class="n2">
            {#each stats.points as point}
              <li>
                <div class="user_stat_list_bottom">
                  <p>{point}</p>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    <div
      class="col-xl-5 col-lg-5 col-md-5 col-6 order-xl-2 order-lg-1 order-md-1
        order-1">
      <div class="user_img_wrap">
        <a href="/" class="user_img">
          <div class="user_avatar"><img src={stats.img} alt="AnImage" /></div>
          <div class="user_name v2">
            <h6>{stats.nicname}</h6>
            <p>{stats.fullname}</p>
            <span class="text_green">{stats.dollars}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
