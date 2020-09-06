<script>
  export let title;
  export let date;
  export let likes;
</script>

<style>
  .news_item {
    border-bottom: 1px solid #3c405c;
    padding: 38px 0 10px;
  }

  .news_title {
    width: 60%;
  }

  .news_title a {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    display: inline-block;
    line-height: 20px;
  }

  .news_meta_info {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: -10px;
  }

  .news_date {
    margin-right: 25px;
  }

  .news_date p,
  .news_like span {
    font-size: 14px;
    line-height: 16px;
  }

  .news_like i {
    color: #634fec;
    margin-right: 6px;
    font-size: 14px;
  }
</style>

<div class="news_item">
  <div class="news_title"><a href="/">{title}</a></div>
  <div class="news_meta_info">
    <div class="news_date">
      <p>{date}</p>
    </div>
    <div class="news_like"><i class="fas fa-heart" /> <span>{likes}</span></div>
  </div>
</div>
