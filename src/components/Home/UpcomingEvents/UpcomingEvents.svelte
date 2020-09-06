<script>
  import EventItem from "./EventItem.svelte";

  const heading = "Upcoming";

  const eventItems = [
    {
      img: "assets/img/img_8.png",
      firstTeam: {
        fname: "Fnatic",
        lname: "X 24",
        logo: "assets/img/img_9.png",
      },
      secondTeam: {
        fname: "NaVi",
        lname: "X 56",
        logo: "assets/img/img_10.png",
      },
      watchLink: "/",
    },
    {
      img: "assets/img/img_8.png",
      firstTeam: {
        fname: "Fnatic",
        lname: "X 24",
        logo: "assets/img/img_9.png",
      },
      secondTeam: {
        fname: "NaVi",
        lname: "X 56",
        logo: "assets/img/img_10.png",
      },
      watchLink: "/",
    },
    {
      img: "assets/img/img_8.png",
      firstTeam: {
        fname: "Fnatic",
        lname: "X 24",
        logo: "assets/img/img_9.png",
      },
      secondTeam: {
        fname: "NaVi",
        lname: "X 56",
        logo: "assets/img/img_10.png",
      },
      watchLink: "/",
    },
    {
      img: "assets/img/img_8.png",
      firstTeam: {
        fname: "Fnatic",
        lname: "X 24",
        logo: "assets/img/img_9.png",
      },
      secondTeam: {
        fname: "NaVi",
        lname: "X 56",
        logo: "assets/img/img_10.png",
      },
      watchLink: "/",
    },
    {
      img: "assets/img/img_8.png",
      firstTeam: {
        fname: "Fnatic",
        lname: "X 24",
        logo: "assets/img/img_9.png",
      },
      secondTeam: {
        fname: "NaVi",
        lname: "X 56",
        logo: "assets/img/img_10.png",
      },
      watchLink: "/",
    },
    {
      img: "assets/img/img_8.png",
      firstTeam: {
        fname: "Fnatic",
        lname: "X 24",
        logo: "assets/img/img_9.png",
      },
      secondTeam: {
        fname: "NaVi",
        lname: "X 56",
        logo: "assets/img/img_10.png",
      },
      watchLink: "/",
    },
  ];
</script>

<section class="upcoming_events_wrap">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="box_title v1">
          <div class="box_title_left">
            <h5>{heading}</h5>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="events_list-wrap">
          {#each eventItems as eventItem}
            <EventItem {...eventItem} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
<!-- upcoming events ends -->
