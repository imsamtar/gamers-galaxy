<script>
  export let img;
  export let firstTeam;
  export let secondTeam;
  export let watchLink;
</script>

<div class="event_item_wrap">
  <div class="event_team">
    <div class="event_img"><img src={img} alt="Animage" /></div>
    <a href="/" class="team_info">
      <div class="team_name">
        <h6>{firstTeam.fname}</h6>
        <span>{firstTeam.lname}</span>
      </div>
      <div class="team_logo"><img src={firstTeam.logo} alt="AnImage" /></div>
    </a>
    <div class="team_vs"><span>VS</span></div>
    <a href="/" class="team_info">
      <div class="team_name">
        <h6>{secondTeam.fname}</h6>
        <span class="text_green">{secondTeam.lname}</span>
      </div>
      <div class="team_logo"><img src={secondTeam.logo} alt="AnImage" /></div>
    </a>
  </div>
  <div class="event_btn"><a href={watchLink} class="btn v3">Watch</a></div>
</div>
