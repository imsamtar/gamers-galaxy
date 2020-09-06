<script>
  export let slide;
</script>

<div class="swiper-slide">
  <a href={slide.href}>
    <p class="slider_text">{slide.text}</p>
    <span class="match_score"> {slide.score} </span>
  </a>
</div>
