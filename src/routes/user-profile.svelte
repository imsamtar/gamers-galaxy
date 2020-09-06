<script>
  import SwiperSetup from "../components/Swipers/Setup.svelte";
  import IncomingEvents from "../components/UserProfile/IncomingEvents/IncomingEvents.svelte";
  import Info from "../components/UserProfile/Info/Info.svelte";
  import PlayerBox from "../components/UserProfile/PlayerBox.svelte";
</script>

<svelte:head>
  <title>Gamers Galaxy</title>
</svelte:head>

<SwiperSetup />
<div class="content_wrapper">
  <section class="player_box_wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <PlayerBox />
        </div>
      </div>
    </div>
  </section>
  <Info />
</div>
<IncomingEvents />
