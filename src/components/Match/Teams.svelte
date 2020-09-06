<script>
  const teamA = {
    img: "assets/img/img_50.png",
    name: "Singularity",
    points: 2,
  };
  const teamB = {
    img: "assets/img/img_51.png",
    name: "PACT",
    points: 1,
  };
</script>

<section class="player_box_wrap">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="point_box v1">
          <div class="point_box_left">
            <div class="team_a_name">
              <img src={teamA.img} alt="AnImage" />
              <p>{teamA.name}</p>
            </div>
            <div class="team_a_point">
              <span class="text_green">{teamA.points}</span>
            </div>
          </div>
          <div class="point_box_center">
            <h2>CS:GO</h2>
            <h4>Match Over</h4>
            <p>15th of July 2020</p>
            <span>Eden Arena Malta vibes cup 3</span>
          </div>
          <div class="point_box_right">
            <div class="team_b_point">
              <span class="text_red">{teamB.points}</span>
            </div>
            <div class="team_b_name">
              <img src={teamB.img} alt="AnImage" />
              <p>{teamB.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
