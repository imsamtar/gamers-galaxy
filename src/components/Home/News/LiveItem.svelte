<script>
  export let img;
  export let info;
</script>

<style>
  .live_item {
    background: #2d325a;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    min-height: 330px;
  }

  .live_item-info a {
    font-size: 16px;
    line-height: 28px;
    font-weight: 600;
    padding: 20px 30px 20px 20px;
    display: block;
  }

  .live_img {
    position: relative;
  }

  .live_img img {
    width: 100%;
  }

  .live_status {
    position: absolute;
    bottom: 12px;
    left: 15px;
  }

  .live_status span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
    background: red;
    position: relative;
    top: 1px;
    margin-right: 6px;
  }

  .live_status p {
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    margin: 0;
    font-weight: 500;
  }

  .live_status {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>

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
