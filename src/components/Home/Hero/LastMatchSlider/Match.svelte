<script>
  export let href;
  export let bg;
  export let logoImg;
  export let time;
  export let score;
  export let statImg;
</script>

<style>
  .match_stat_wrap {
    background-repeat: no-repeat;
    height: 160px;
    background-size: contain;
    background-position: top;
    padding: 15px 20px;
    background-size: cover;
    background-position: top left;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 25px;
  }

  .match-heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .match_stat {
    margin-bottom: 15px;
  }

  .match_time {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .team_logo img {
    min-width: 100px;
  }

  .event_team .team_logo img {
    max-width: 60px;
    min-width: 60px;
  }

  .watch_icon img {
    max-width: 12px;
    margin-right: 6px;
    position: relative;
  }

  .match_time span {
    font-size: 16px;
    font-weight: 500;
  }

  .match_time img {
    width: 20px;
  }

  .match_stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .match_stat_left h6,
  .match_stat_right h5 {
    font-size: 16px;
    line-height: 1;
    margin: 0;
    font-weight: 500;
  }

  .team_logo {
    max-width: 70px;
  }
</style>

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
