<script>
  export let title;
  export let teamA;
  export let teamB;
  export let classes;
  export let stats;
</script>

<div class="match_box">
  <div class="match_box_title {classes}">
    <p>{title}</p>
  </div>
  <div class="promo_box">
    <div class="point_box_left">
      <a href={teamA.href} class="team_a_name">
        <img src={teamA.img} alt="AnImage" />
        <p>{teamA.name}</p>
      </a>
      <div class="team_a_point">
        <span class="text_red">{teamA.points}</span>
      </div>
    </div>
    <div class="point_box_center">
      <div class="match_stats"><a class="stat_btn" href="/">Stats</a></div>
      <div class="match-points">
        (<span class="text_yel">{stats[0]}</span>:<span
          class="text_blu">{stats[1]}</span>, <span
          class="text_blu">{stats[2]}</span>:<span
          class="text_yel">{stats[3]}</span>)
      </div>
    </div>
    <div class="point_box_right">
      <div class="team_b_point">
        <span class="text_green">{teamB.points}</span>
      </div>
      <a href={teamB.href} class="team_b_name">
        <img src={teamB.img} alt="AnImage" />
        <p>{teamB.name}</p>
      </a>
    </div>
  </div>
</div>
