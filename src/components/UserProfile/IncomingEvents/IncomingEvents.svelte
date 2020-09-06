<script>
  import Event from "./Event.svelte";
  import upcomingEvents from "./upcoming_events";
</script>

<section class="user_match_stat">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-md-12 mb-3">
        {#each upcomingEvents as event}
          <Event {event} />
        {/each}
      </div>
    </div>
  </div>
</section>
