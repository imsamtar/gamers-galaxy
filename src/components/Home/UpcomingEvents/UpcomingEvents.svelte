<script>
  import EventItem from "./EventItem.svelte";
  import eventItems from "./event_items";

  const heading = "Upcoming";

  // NiceScroll
  let eventsListWrap;
  $: if (eventsListWrap) {
    setTimeout(function () {
      window.$(".events_list-wrap").niceScroll({
        cursorcolor: "rgb(105, 82, 253)",
        background: "rgb(44, 49, 89)",
        cursorborder: "0px",
        autohidemode: "leave",
      });
    }, 50);
  }
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
        <div class="events_list-wrap" bind:this={eventsListWrap}>
          {#each eventItems as eventItem}
            <EventItem {...eventItem} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
