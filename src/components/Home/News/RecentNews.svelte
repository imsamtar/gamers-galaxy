<script>
  import NewsItem from "./NewsItem.svelte";

  const heading = "Recent news";

  const recentNews = [
    {
      title: "What’s new in the Valorant 1.03 patch?",
      date: "14 April 2020",
      likes: "245",
    },
    {
      title: "Hiko reveals pro Valorant Agent tier list",
      date: "14 April 2020",
      likes: "245",
    },
    {
      title:
        "Riot to remove frustrating daily mission after community backlash",
      date: "14 April 2020",
      likes: "245",
    },
  ];
</script>

<div class="col-lg-5 offset-lg-1">
  <div class="row">
    <div class="col-md-12">
      <div class="box_title v1">
        <div class="box_title_left">
          <h5>{heading}</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      {#each recentNews as news}
        <NewsItem {...news} />
      {/each}
    </div>
  </div>
</div>
