<script>
  export let event;

  const icons = [
    "assets/img/img_22.png",
    "assets/img/img_23.png",
    "assets/img/img_24.png",
    "assets/img/img_25.png",
    "assets/img/img_26.png",
    "assets/img/img_27.png",
  ];
  const labels = ["ADR", "UD", "EF", "ULTS", "$"];
</script>

<div class="user_match_stat_wrap v5">
  <div class="user_match_stat_header mb-30">
    <div class="date">
      <p>{event.date}</p>
    </div>
    <div class="match_results_wrap">
      <a href={event.teamA.href}>{event.teamA.name}</a>
      <div class="team-logo">
        <a href={event.teamA.href}>
          <img src={event.teamA.img} alt="AnImage" /></a>
      </div>
      <div class="match_results">
        <span>{event.teamA.points}</span> : <span>{event.teamB.points}</span>
      </div>
    </div>
    <a href={event.teamB.href} class="match_winner">
      <img src={event.teamB.img} alt="AnImage" />
      <span>{event.teamB.name}</span>
    </a>
    <div class="match_stats"><a class="stat_btn" href="/">Stats</a></div>
  </div>
  <div class="user_match_statistics">
    <div class="user_img">
      <div class="user_avatar"><img src={event.img} alt="AnImage" /></div>
      <div class="user_name">
        <h6>{event.username}</h6>
        <p>{event.fullname}</p>
      </div>
    </div>
    <div class="user_stat_list">
      <ul>
        {#each icons as icon, index}
          <li>
            <div class="user_stat_list_top">
              <img src={icon} alt="AnImage" />
            </div>
            <div class="user_stat_list_bottom">
              <p>{event.points[index]}</p>
            </div>
          </li>
        {/each}
        {#each labels as label, index}
          <li>
            <div class="user_stat_list_top">
              <p>{label}</p>
            </div>
            <div class="user_stat_list_bottom">
              <p>{event.points[icons.length + index]}</p>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
