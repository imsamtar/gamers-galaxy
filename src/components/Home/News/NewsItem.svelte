<script>
  export let title;
  export let date;
  export let likes;
</script>

<div class="news_item">
  <div class="news_title"><a href="/">{title}</a></div>
  <div class="news_meta_info">
    <div class="news_date">
      <p>{date}</p>
    </div>
    <div class="news_like"><i class="fas fa-heart" /> <span>{likes}</span></div>
  </div>
</div>
