<script>
  import SwiperSetup from "../components/Swipers/Setup.svelte";
  import Teams from "../components/Match/Teams.svelte";
  import MatchMaps from "../components/Match/Map/Map.svelte";
  import MatchSlider from "../components/Match/Slider/Slider.svelte";
  import VideoPlayer from "../components/Match/VideoPlayer.svelte";
  import Points from "../components/Match/Points/Points.svelte";
  import MatchStats from "../components/Match/Stats/Stats.svelte";
</script>

<svelte:head>
  <title>Gamers Galaxy</title>
</svelte:head>

<SwiperSetup />
<div
  class="content_wrapper"
  style="background-image: url(assets/img/bg_2.png);">
  <Teams />
  <MatchMaps />
</div>
<MatchSlider />
<VideoPlayer />
<Points />
<MatchStats />
