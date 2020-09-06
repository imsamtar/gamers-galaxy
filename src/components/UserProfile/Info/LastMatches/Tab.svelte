<script>
  import upcomingMatches from "./upcoming_matches";
  import latestResults from "./latest_results";
  import SingleMatch from "./SingleMatch.svelte";

  export let name;
  export let index;

  let act = 0;

  function isActive() {
    if (!act && !index) {
      act++;
      return "active";
    }
    act++;
    return "";
  }
</script>

<div class="tab-pane fade show {isActive()}" id="tab_{index + 1}">
  <div class="row">
    <div class="col-lg-10 col-md-12">
      <h6 class="subtitle">Upcoming matches for {name}</h6>
      <div class="mb-5 user_match_stat_header_wrap">
        {#each upcomingMatches as match}
          <SingleMatch {match} />
        {/each}
      </div>
      <h6 class="subtitle">Latest results for {name}s</h6>
      <div class="mb-5 user_match_stat_header_wrap">
        {#each latestResults as match}
          <SingleMatch {match} />
        {/each}
      </div>
    </div>
  </div>
</div>
