<script>
  export let match;
</script>

<div class="user_match_stat_header v2">
  <div class="date">
    <p>{match.date}</p>
  </div>
  <div class="match_results_wrap">
    <a href={match.teama.href}>{match.teama.name}</a>
    <div class="team-logo">
      <a href={match.teama.href}><img src={match.teama.img} alt="AnImage" /></a>
    </div>
    <div class="match_results v2">
      <span>{match.teama.points}</span> : <span>{match.teamb.points}</span>
    </div>
  </div>
  <a href={match.teamb.href} class="match_winner">
    <img src={match.teamb.img} alt="AnImage" />
    <span>{match.teamb.name}</span>
  </a>
  <div class="match_stats">
    <a href="/"><a href="/"><img src="assets/img/img_38.png" alt="AnImage" /></a></a>
    <a class="stat_btn" href="/">Stats</a>
  </div>
</div>
