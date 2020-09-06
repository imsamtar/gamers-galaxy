<script>
  import HomeHero from "../components/Home/Hero/Hero.svelte";
  import HomeNews from "../components/Home/News/News.svelte";
  import UpcomingEvents from "../components/Home/UpcomingEvents/UpcomingEvents.svelte";
</script>

<style>
  .content_wrapper.v1:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 62%;
    content: "";
    background-image: url(/assets/img/hero_1.png);
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>

<svelte:head>
  <title>Gamers Galaxy</title>
</svelte:head>
<div class="content_wrapper v1">
  <HomeHero />
  <HomeNews />
</div>
<UpcomingEvents />
