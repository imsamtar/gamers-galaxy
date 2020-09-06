<script>
  import Match from "./Match.svelte";
  import Heading from "./Heading.svelte";

  let matches = [
    {
      href: "/",
      bg: "assets/img/img_1.png",
      logoImg: "assets/img/user_1.png",
      statImg: "assets/img/stat_img.png",
      time: "23:45",
      score: "23:45",
    },
    {
      href: "/",
      bg: "assets/img/img_2.png",
      logoImg: "assets/img/user_2.png",
      statImg: "assets/img/stat_img.png",
      time: "23:45",
      score: "23:45",
    },
    {
      href: "/",
      bg: "assets/img/img_3.png",
      logoImg: "assets/img/user_3.png",
      statImg: "assets/img/stat_img.png",
      time: "23:45",
      score: "23:45",
    },
    {
      href: "/",
      bg: "assets/img/img_4.png",
      logoImg: "assets/img/user_4.png",
      statImg: "assets/img/stat_img.png",
      time: "23:45",
      score: "23:45",
    },
    {
      href: "/",
      bg: "assets/img/img_5.png",
      logoImg: "assets/img/user_5.png",
      statImg: "assets/img/stat_img.png",
      time: "23:45",
      score: "23:45",
    },
  ];
</script>

<div class="hero_slider_wrap">
  <Heading />
  <div class="container-fluid pr-0">
    <div class="row">
      <div class="col-md-12">
        <div class="hero_slider swiper-container">
          <div class="swiper-wrapper">
            {#each matches as match}
              <Match {...match} />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
