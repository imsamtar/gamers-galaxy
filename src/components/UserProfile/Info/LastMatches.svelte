<script>
  import { onMount } from "svelte";
  import Tab from "./LastMatches/Tab.svelte";

  const tabs = ["CS:GO", "Fortnite", "Valorant"];
</script>

<div class="col-lg-6">
  <div class="box_title">
    <div class="box_title_left">
      <h2>Last matches</h2>
    </div>
  </div>
</div>
<div class="col-md-12">
  <ul class="nav nav-tabs sec_tab">
    {#each tabs as tab, index}
      <li class="nav-item">
        <a
          data-toggle="tab"
          class={!index ? 'active' : ''}
          href="#tab_{index + 1}">{tab}</a>
      </li>
    {/each}
  </ul>
  <div class="tab-content sec_tab_content">
    {#each tabs as tab, index}
      <Tab name={tab} {index} />
    {/each}
  </div>
</div>
