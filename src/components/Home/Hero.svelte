<script>
  import SwipersSetup from "../Swipers/Setup.svelte";
</script>

<SwipersSetup />
<div class="content_wrapper v1">
  <section class="hero_section">
    <div class="container">
      <div class="hero_banner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-5 col-lg-6 col-md-8">
              <div class="hero_banner_text">
                <h1>Welcome to Gamer Galaxy!</h1>
                <p>
                  Who are we? We're a small video game streaming and playing
                  community. We're always open to new members so join us on
                  Discord today!
                </p>
              </div>
            </div>
            <div class="col-xl-5 offset-xl-2 col-lg-6 col-md-12">
              <div class="hero_banner_btn">
                <a href="/" class="btn v2"><img
                    src="assets/img/btn_img.png"
                    alt="AnImage" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero_slider_wrap">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="box_title v1">
              <div class="box_title_left">
                <h2>Last Matches</h2>
              </div>
              <div class="box_title_right">
                <!-- Add slider Arrows -->
                <div class="hero_slider_btn">
                  <div class="hero-prev">
                    <img src="assets/img/arrow_left.png" alt="AnImage" />
                  </div>
                  <div class="hero-next">
                    <img src="assets/img/arrow_right.png" alt="AnImage" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid pr-0">
        <div class="row">
          <div class="col-md-12">
            <div class="hero_slider swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a
                    href="/"
                    class="match_stat_wrap"
                    style="background-image: url(assets/img/img_1.png);">
                    <div class="match-heading">
                      <div class="team_logo">
                        <img src="assets/img/user_1.png" alt="AnImage" />
                      </div>
                      <div class="match_time">
                        <div class="watch_icon">
                          <img src="assets/img/watch.png" alt="AnImage" />
                        </div>
                        <span>23:45</span>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Score</h6>
                      </div>
                      <div class="match_stat_right">
                        <h5>23:45</h5>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Stats</h6>
                      </div>
                      <div class="match_stat_right">
                        <img src="assets/img/stat_img.png" alt="AnImage" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="/"
                    class="match_stat_wrap"
                    style="background-image: url(assets/img/img_2.png);">
                    <div class="match-heading">
                      <div class="team_logo">
                        <img src="assets/img/user_2.png" alt="AnImage" />
                      </div>
                      <div class="match_time">
                        <div class="watch_icon">
                          <img src="assets/img/watch.png" alt="AnImage" />
                        </div>
                        <span>23:45</span>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Score</h6>
                      </div>
                      <div class="match_stat_right">
                        <h5>23:45</h5>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Stats</h6>
                      </div>
                      <div class="match_stat_right">
                        <img src="assets/img/stat_img.png" alt="AnImage" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="/"
                    class="match_stat_wrap"
                    style="background-image: url(assets/img/img_3.png);">
                    <div class="match-heading">
                      <div class="team_logo">
                        <img src="assets/img/user_3.png" alt="AnImage" />
                      </div>
                      <div class="match_time">
                        <div class="watch_icon">
                          <img src="assets/img/watch.png" alt="AnImage" />
                        </div>
                        <span>23:45</span>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Score</h6>
                      </div>
                      <div class="match_stat_right">
                        <h5>23:45</h5>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Stats</h6>
                      </div>
                      <div class="match_stat_right">
                        <img src="assets/img/stat_img.png" alt="AnImage" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="/"
                    class="match_stat_wrap"
                    style="background-image: url(assets/img/img_4.png);">
                    <div class="match-heading">
                      <div class="team_logo">
                        <img src="assets/img/user_4.png" alt="AnImage" />
                      </div>
                      <div class="match_time">
                        <div class="watch_icon">
                          <img src="assets/img/watch.png" alt="AnImage" />
                        </div>
                        <span>23:45</span>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Score</h6>
                      </div>
                      <div class="match_stat_right">
                        <h5>23:45</h5>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Stats</h6>
                      </div>
                      <div class="match_stat_right">
                        <img src="assets/img/stat_img.png" alt="AnImage" />
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="/"
                    class="match_stat_wrap"
                    style="background-image: url(assets/img/img_5.png);">
                    <div class="match-heading">
                      <div class="team_logo">
                        <img src="assets/img/user_6.png" alt="AnImage" />
                      </div>
                      <div class="match_time">
                        <div class="watch_icon">
                          <img src="assets/img/watch.png" alt="AnImage" />
                        </div>
                        <span>23:45</span>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Score</h6>
                      </div>
                      <div class="match_stat_right">
                        <h5>23:45</h5>
                      </div>
                    </div>
                    <div class="match_stat">
                      <div class="match_stat_left">
                        <h6>Stats</h6>
                      </div>
                      <div class="match_stat_right">
                        <img src="assets/img/stat_img.png" alt="AnImage" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero section ends -->
  <!-- News Section starts -->
  <section class="news_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="box_title v1">
            <div class="box_title_left">
              <h5>Currently Live</h5>
            </div>
            <div class="box_title_right">
              <!-- Add slider Arrows -->
              <div class="live_slider_btn">
                <div class="live_slider_prev">
                  <img src="assets/img/arrow_left.png" alt="AnImage" />
                </div>
                <div class="live_slider_next">
                  <img src="assets/img/arrow_right.png" alt="AnImage" />
                </div>
              </div>
            </div>
          </div>
          <div class="live_slider swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="live_item">
                  <div class="live_img">
                    <img src="assets/img/img_6.png" alt="Animage" />
                    <div class="live_status">
                      <span />
                      <p>Live</p>
                    </div>
                  </div>
                  <div class="live_item-info">
                    <a href="/">BOOM Esports vs NEW Esports, ONE Esports Dota 2
                      SEA League, bo2, game 2</a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="live_item">
                  <div class="live_img">
                    <img src="assets/img/img_7.png" alt="Animage" />
                    <div class="live_status">
                      <span />
                      <p>Live</p>
                    </div>
                  </div>
                  <div class="live_item-info">
                    <a href="/">fnatic vs NaVi | inferno | ELEAGUE Major Boston
                      2018</a>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="live_item">
                  <div class="live_img">
                    <img src="assets/img/img_6.png" alt="Animage" />
                    <div class="live_status">
                      <span />
                      <p>Live</p>
                    </div>
                  </div>
                  <div class="live_item-info">
                    <a href="/">BOOM Esports vs NEW Esports, ONE Esports Dota 2
                      SEA League, bo2, game 2</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="row">
            <div class="col-md-12">
              <div class="box_title v1">
                <div class="box_title_left">
                  <h5>Recent news</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="news_item">
                <div class="news_title">
                  <a href="/">What’s new in the Valorant 1.03 patch?</a>
                </div>
                <div class="news_meta_info">
                  <div class="news_date">
                    <p>14 April 2020</p>
                  </div>
                  <div class="news_like">
                    <i class="fas fa-heart" />
                    <span>245</span>
                  </div>
                </div>
              </div>
              <div class="news_item">
                <div class="news_title">
                  <a href="/">Hiko reveals pro Valorant Agent tier list</a>
                </div>
                <div class="news_meta_info">
                  <div class="news_date">
                    <p>14 April 2020</p>
                  </div>
                  <div class="news_like">
                    <i class="fas fa-heart" />
                    <span>245</span>
                  </div>
                </div>
              </div>
              <div class="news_item">
                <div class="news_title">
                  <a href="/">Riot to remove frustrating daily mission after
                    community backlash</a>
                </div>
                <div class="news_meta_info">
                  <div class="news_date">
                    <p>14 April 2020</p>
                  </div>
                  <div class="news_like">
                    <i class="fas fa-heart" />
                    <span>245</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- News Section ends -->
</div>
