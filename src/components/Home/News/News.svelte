<script>
  import ArrowLeft from "./ArrowLeft.svelte";
  import ArrowRight from "./ArrowRight.svelte";
  import LiveItem from "./LiveItem.svelte";
  import RecentNews from "./RecentNews.svelte";

  const liveItems = [
    {
      img: "assets/img/img_6.png",
      info:
        "BOOM Esports vs NEW Esports, ONE Esports Dota 2 SEA League, bo2, game 2",
    },
    {
      img: "assets/img/img_7.png",
      info: "fnatic vs NaVi | inferno | ELEAGUE Major Boston 2018",
    },
  ];
</script>

<style>
  .live_slider {
    padding-bottom: 30px;
  }
</style>

<section class="news_section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="box_title v1">
          <div class="box_title_left">
            <h5>Currently Live</h5>
          </div>
          <div class="box_title_right">
            <!-- Add slider Arrows -->
            <div class="live_slider_btn">
              <ArrowLeft />
              <ArrowRight />
            </div>
          </div>
        </div>
        <div class="live_slider swiper-container">
          <div class="swiper-wrapper">
            {#each liveItems as liveItem}
              <LiveItem {...liveItem} />
            {/each}
          </div>
        </div>
      </div>
      <RecentNews />
    </div>
  </div>
</section>
<!-- News Section ends -->
