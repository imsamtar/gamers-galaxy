<script>
  export let href;
  export let bg;
  export let logoImg;
  export let time;
  export let score;
  export let statImg;
</script>

<div class="swiper-slide">
  <a {href} class="match_stat_wrap" style="background-image: url({bg});">
    <div class="match-heading">
      <div class="team_logo"><img src={logoImg} alt="AnImage" /></div>
      <div class="match_time">
        <div class="watch_icon">
          <img src="assets/img/watch.png" alt="AnImage" />
        </div>
        <span>{time}</span>
      </div>
    </div>
    <div class="match_stat">
      <div class="match_stat_left">
        <h6>Score</h6>
      </div>
      <div class="match_stat_right">
        <h5>{score}</h5>
      </div>
    </div>
    <div class="match_stat">
      <div class="match_stat_left">
        <h6>Stats</h6>
      </div>
      <div class="match_stat_right"><img src={statImg} alt="AnImage" /></div>
    </div>
  </a>
</div>
