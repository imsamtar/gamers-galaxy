<script>
  import VidPlayer from "./VidPlayer.svelte";
  const options = {
    check_1: "Death",
    check_2: "Traps",
    check_3: "Movement Lines",
    check_4: "Ult used",
  };
</script>

<div class="col-xl-5 offset-xl-1 col-lg-6 col-md-12">
  <div class="box_title">
    <div class="box_title_left">
      <h2>Rewatch</h2>
    </div>
  </div>
  <div class="subheader"><a href="/">GOTV Demo</a></div>
  <VidPlayer />
  <div class="custom_checkbox">
    <ul>
      {#each Object.entries(options) as option}
        <li>
          <div class="form-group">
            <input type="checkbox" id={option[0]} />
            <label for={option[0]}>{option[1]}</label>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>
