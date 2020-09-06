<script>
  export let img;
  export let info;
</script>

<div class="swiper-slide">
  <div class="live_item">
    <div class="live_img">
      <img src={img} alt="Animage" />
      <div class="live_status">
        <span />
        <p>Live</p>
      </div>
    </div>
    <div class="live_item-info"><a href="/">{info}</a></div>
  </div>
</div>
