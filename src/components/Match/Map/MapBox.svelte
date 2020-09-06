<script>
  import MatchBox from "./MatchBox.svelte";
  import matchBoxes from "./matchBoxes";
</script>

<div class="col-xl-5 col-lg-6 col-md-12">
  <div class="map_box_wrap">
    <div class="box_title">
      <div class="box_title_left">
        <h2>Maps</h2>
      </div>
    </div>
    <div class="map_box">
      <p>Cup of Cybersport</p>
      <p>1/4 final</p>
      <p>Rank: Gold</p>
      <p>Info: Map Dust 2 | overpass | Vertigo</p>
      <p>Ticks: 128</p>
      <p>Some info: Some text</p>
    </div>
    {#each matchBoxes as matchBox}
      <MatchBox {...matchBox} />
    {/each}
  </div>
</div>
