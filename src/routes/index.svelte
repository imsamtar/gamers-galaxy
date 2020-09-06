<script>
  import HomeHero from "../components/Home/Hero/Hero.svelte";
  import HomeNews from "../components/Home/News/News.svelte";
  import UpcomingEvents from "../components/Home/UpcomingEvents/UpcomingEvents.svelte";
</script>

<svelte:head>
  <title>Gamers Galaxy</title>
</svelte:head>

<div class="content_wrapper v1">
  <HomeHero />
  <HomeNews />
</div>
<UpcomingEvents />
