<script>
  import SwiperSetup from "../components/Swipers/Setup.svelte";
</script>

<SwiperSetup />
<div
  class="content_wrapper"
  style="background-image: url(assets/img/bg_2.png);">
  <section class="player_box_wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="point_box v1">
            <div class="point_box_left">
              <div class="team_a_name">
                <img src="assets/img/img_50.png" alt="AnImage" />
                <p>Singularity</p>
              </div>
              <div class="team_a_point"><span class="text_green">2</span></div>
            </div>
            <div class="point_box_center">
              <h2>CS:GO</h2>
              <h4>Match Over</h4>
              <p>15th of July 2020</p>
              <span>Eden Arena Malta vibes cup 3</span>
            </div>
            <div class="point_box_right">
              <div class="team_b_point"><span class="text_red">1</span></div>
              <div class="team_b_name">
                <img src="assets/img/img_51.png" alt="AnImage" />
                <p>PACT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="maps_section">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6 col-md-12">
          <div class="map_box_wrap">
            <div class="box_title">
              <div class="box_title_left">
                <h2>Maps</h2>
              </div>
            </div>
            <div class="map_box">
              <p>Cup of Cybersport</p>
              <p>1/4 final</p>
              <p>Rank: Gold</p>
              <p>Info: Map Dust 2 | overpass | Vertigo</p>
              <p>Ticks: 128</p>
              <p>Some info: Some text</p>
            </div>
            <div class="match_box">
              <div class="match_box_title bg_mt">
                <p>Dust 2</p>
              </div>
              <div class="promo_box">
                <div class="point_box_left">
                  <a href="#" class="team_a_name">
                    <img src="assets/img/img_50.png" alt="AnImage" />
                    <p>Singularity</p>
                  </a>
                  <div class="team_a_point">
                    <span class="text_red">9</span>
                  </div>
                </div>
                <div class="point_box_center">
                  <div class="match_stats">
                    <a class="stat_btn" href="#">Stats</a>
                  </div>
                  <div class="match-points">
                    (<span class="text_yel">6</span>:<span
                      class="text_blu">9</span>, <span
                      class="text_blu">3</span>:<span class="text_yel">7</span>)
                  </div>
                </div>
                <div class="point_box_right">
                  <div class="team_b_point">
                    <span class="text_green">16</span>
                  </div>
                  <a href="#" class="team_b_name">
                    <img src="assets/img/img_51.png" alt="AnImage" />
                    <p>PACT</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="match_box">
              <div class="match_box_title bg_mal">
                <p>Vertigo</p>
              </div>
              <div class="promo_box">
                <div class="point_box_left">
                  <a href="#" class="team_a_name">
                    <img src="assets/img/img_50.png" alt="AnImage" />
                    <p>Singularity</p>
                  </a>
                  <div class="team_a_point">
                    <span class="text_red">9</span>
                  </div>
                </div>
                <div class="point_box_center">
                  <div class="match_stats">
                    <a class="stat_btn" href="#">Stats</a>
                  </div>
                  <div class="match-points">
                    (<span class="text_yel">7</span>:<span
                      class="text_blu">8</span>, <span
                      class="text_blu">9</span>:<span class="text_yel">4</span>)
                  </div>
                </div>
                <div class="point_box_right">
                  <div class="team_b_point">
                    <span class="text_green">16</span>
                  </div>
                  <a href="#" class="team_b_name">
                    <img src="assets/img/img_51.png" alt="AnImage" />
                    <p>PACT</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="match_box">
              <div class="match_box_title bg_gr">
                <p>Overpass</p>
              </div>
              <div class="promo_box">
                <div class="point_box_left">
                  <a href="#" class="team_a_name">
                    <img src="assets/img/img_50.png" alt="AnImage" />
                    <p>Singularity</p>
                  </a>
                  <div class="team_a_point">
                    <span class="text_red">9</span>
                  </div>
                </div>
                <div class="point_box_center">
                  <div class="match_stats">
                    <a class="stat_btn" href="#">Stats</a>
                  </div>
                  <div class="match-points">
                    (<span class="text_yel">7</span>:<span
                      class="text_blu">8</span>, <span
                      class="text_blu">9</span>:<span class="text_yel">4</span>)
                  </div>
                </div>
                <div class="point_box_right">
                  <div class="team_b_point">
                    <span class="text_green">16</span>
                  </div>
                  <a href="#" class="team_b_name">
                    <img src="assets/img/img_51.png" alt="AnImage" />
                    <p>PACT</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 offset-xl-1 col-lg-6 col-md-12">
          <div class="box_title">
            <div class="box_title_left">
              <h2>Rewatch</h2>
            </div>
          </div>
          <div class="subheader"><a href="#">GOTV Demo</a></div>
          <div class="min_video_player">
            <div class="video">
              <img src="assets/img/img_53.png" alt="AnImage" />
            </div>
            <div class="video_play_btn">
              <button class="prev"><img
                  src="assets/img/prev_btn.png"
                  alt="AnImage" /></button>
              <button class="play"><img src="assets/img/play_btn.png" alt="" /></button>
              <button class="next"><img
                  src="assets/img/next_btn.png"
                  alt="AnImage" /></button>
            </div>
          </div>
          <div class="custom_checkbox">
            <ul>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="check_1" />
                  <label for="check_1">Death</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="check_2" />
                  <label for="check_2">Traps</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="check_3" />
                  <label for="check_3">Movement Lines</label>
                </div>
              </li>
              <li>
                <div class="form-group">
                  <input type="checkbox" id="check_4" />
                  <label for="check_4">Ult used</label>
                </div>
              </li>
              <!--  <li><img src="assets/img/box_1.png" alt="AnImage">Death</li>
                            <li><img src="assets/img/box_1.png" alt="AnImage">Traps</li>
                            <li><img src="assets/img/box_2.png" alt="AnImage">Movement Lines</li>
                            <li><img src="assets/img/box_2.png" alt="AnImage">Ult used</li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
<!-- Slider starts -->
<section class="slick-center-wrap">
  <div class="match-slider swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <a href="#">
          <p class="slider_text">
            M1 | darko - 4 USP-S kills (2 HS) on the bombsite B defense (pistol
            round)
          </p>
          <span class="match_score">4:58</span>
        </a>
      </div>
      <div class="swiper-slide">
        <a href="#">
          <p class="slider_text">
            M1 | darko - 4 USP-S kills (2 HS) on the bombsite B defense (pistol
            round)
          </p>
          <span class="match_score">4:58</span>
        </a>
      </div>
      <div class="swiper-slide">
        <a href="#">
          <p class="slider_text">
            M1 | darko - 4 USP-S kills (2 HS) on the bombsite B defense (pistol
            round)
          </p>
          <span class="match_score">4:58</span>
        </a>
      </div>
      <div class="swiper-slide">
        <a href="#">
          <p class="slider_text">
            M1 | darko - 4 USP-S kills (2 HS) on the bombsite B defense (pistol
            round)
          </p>
          <span class="match_score">4:58</span>
        </a>
      </div>
      <div class="swiper-slide">
        <a href="#">
          <p class="slider_text">
            M1 | darko - 4 USP-S kills (2 HS) on the bombsite B defense (pistol
            round)
          </p>
          <span class="match_score">4:58</span>
        </a>
      </div>
    </div>
  </div>
</section>
<!-- Slider ends -->
<!-- Video player starts -->
<section class="mega_video_player">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="video-img">
          <img src="assets/img/video_img.png" alt="AnImage" />
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Video player ends -->
<!--Simple section starts  -->
<section class="simple_section">
  <div class="container">
    <div class="row">
      <div class="col-xl-10 offset-xl-1 col-lg-12">
        <div class="point_box v2">
          <div class="point_box_left">
            <div class="team_a_name">
              <img src="assets/img/img_45.png" alt="AnImage" />
              <p>Singularity</p>
            </div>
            <div class="team_a_point"><span class="text_green">2</span></div>
          </div>
          <div class="point_box_center">
            <h2>15:27</h2>
          </div>
          <div class="point_box_right">
            <div class="team_b_point"><span class="text_red">1</span></div>
            <div class="team_b_name">
              <img src="assets/img/img_44.png" alt="AnImage" />
              <p>PACT</p>
            </div>
          </div>
        </div>
        <div class="maf_team_name">
          <p>Game 1</p>
          <select class="dropdown_select">
            <option value="1">Dust 2</option>
            <option value="1">Dust 2</option>
            <option value="1">Dust 2</option>
          </select>
        </div>
        <div class="result_sum_wrap">
          <ul class="res_team">
            <li>Pact</li>
            <li>Rounds</li>
            <li>Singularity</li>
          </ul>
          <div class="result_sum">
            <ul class="result_count">
              <li><span class="text_red">L</span></li>
              <li><span>1</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_red">L</span></li>
              <li><span>2</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_red">L</span></li>
              <li><span>3</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_green">W</span></li>
              <li><span>4</span></li>
              <li><span class="text_red">L</span></li>
            </ul>
            <ul class="result_count active">
              <li><span class="text_green">W</span></li>
              <li><span>5</span></li>
              <li><span class="text_red">L</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_green">W</span></li>
              <li><span>6</span></li>
              <li><span class="text_red">L</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_red">L</span></li>
              <li><span>7</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
            <ul class="result_count active">
              <li><span class="text_red">L</span></li>
              <li><span>8</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_green">W</span></li>
              <li><span>9</span></li>
              <li><span class="text_red">L</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_green">W</span></li>
              <li><span>10</span></li>
              <li><span class="text_red">L</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_red">L</span></li>
              <li><span>11</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_red">L</span></li>
              <li><span>12</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_red">L</span></li>
              <li><span>13</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_red">L</span></li>
              <li><span>14</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_green">W</span></li>
              <li><span>15</span></li>
              <li><span class="text_red">L</span></li>
            </ul>
            <ul class="result_count">
              <li><span class="text_red">L</span></li>
              <li><span>16</span></li>
              <li><span class="text_green">W</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--Simple section ends  -->
<!-- upcoming events starts -->
<section class="user_match_stat">
  <div class="container">
    <div class="row">
      <div class="col-xl-6 col-lg-12">
        <div class="point_box_left maf">
          <div class="team_a_name">
            <img src="assets/img/img_45.png" alt="AnImage" />
            <p>Singularity</p>
          </div>
        </div>
        <div class="user_match_stat_wrap">
          <div class="user_match_statistics v2">
            <div class="row w-100 align-items-center no-gutters">
              <div
                class="col-lg-7 offset-lg-5 col-md-7 offset-md-5 col-6 offset-6">
                <div class="user_stat_list_wrap v2">
                  <div class="user_stat_list">
                    <ul class="n1">
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_22.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_23.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_24.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_25.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_26.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_27.png" alt="AnImage" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2">
            <div class="row w-100 align-items-center no-gutters">
              <div class="col-lg-5 col-md-5 col-6">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_1.png" alt="AnImage" />
                    </div>
                    <div class="user_name">
                      <h6>Minise</h6>
                      <p>Jacek Jeziak</p>
                      <span class="text_green">$10500</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 col-6">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2">
            <div class="row w-100 align-items-center no-gutters">
              <div class="col-lg-5 col-md-5 col-6">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_2.png" alt="AnImage" />
                    </div>
                    <div class="user_name">
                      <h6>Jabbi</h6>
                      <p>Jacob Nigaard</p>
                      <span class="text_green">$8900</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 col-6">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2">
            <div class="row w-100 align-items-center no-gutters">
              <div class="col-lg-5 col-md-5 col-6">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_1.png" alt="AnImage" />
                    </div>
                    <div class="user_name">
                      <h6>Minise</h6>
                      <p>Jacek Jeziak</p>
                      <span class="text_green">$10500</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 col-6">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2">
            <div class="row w-100 align-items-center no-gutters">
              <div class="col-lg-5 col-md-5 col-6">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_1.png" alt="AnImage" />
                    </div>
                    <div class="user_name">
                      <h6>Minise</h6>
                      <p>Jacek Jeziak</p>
                      <span class="text_green">$10500</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 col-6">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2">
            <div class="row w-100 align-items-center no-gutters">
              <div class="col-lg-5 col-md-5 col-6">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_1.png" alt="AnImage" />
                    </div>
                    <div class="user_name">
                      <h6>Minise</h6>
                      <p>Jacek Jeziak</p>
                      <span class="text_green">$10500</span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-7 col-md-7 col-6">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-6 col-lg-12">
        <div class="point_box_right maf">
          <div class="team_b_name">
            <img src="assets/img/img_44.png" alt="AnImage" />
            <p>PACT</p>
          </div>
        </div>
        <div class="user_match_stat_wrap">
          <div class="user_match_statistics v2">
            <div class="row w-100 align-items-center no-gutters">
              <div
                class="col-xl-7 offset-xl-0 col-lg-7 offset-lg-5 col-md-7
                  offset-md-5 col-6 offset-6">
                <div class="user_stat_list_wrap v2">
                  <div class="user_stat_list">
                    <ul class="n1">
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_22.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_23.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_24.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_25.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_26.png" alt="AnImage" />
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_top">
                          <img src="assets/img/img_27.png" alt="AnImage" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2 style2">
            <div class="row w-100 align-items-center no-gutters">
              <div
                class="col-xl-7 col-lg-7 col-md-7 col-6 order-xl-1 order-lg-2
                  order-md-2 order-2">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-5 col-lg-5 col-md-5 col-6 order-xl-2 order-lg-1
                  order-md-1 order-1">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_1.png" alt="AnImage" />
                    </div>
                    <div class="user_name v2">
                      <h6>Minise</h6>
                      <p>Jacek Jeziak</p>
                      <span class="text_green">$10500</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2 style2">
            <div class="row w-100 align-items-center no-gutters">
              <div
                class="col-xl-7 col-lg-7 col-md-7 col-6 order-xl-1 order-lg-2
                  order-md-2 order-2">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-5 col-lg-5 col-md-5 col-6 order-xl-2 order-lg-1
                  order-md-1 order-1">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_1.png" alt="AnImage" />
                    </div>
                    <div class="user_name v2">
                      <h6>Minise</h6>
                      <p>Jacek Jeziak</p>
                      <span class="text_green">$10500</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2 style2">
            <div class="row w-100 align-items-center no-gutters">
              <div
                class="col-xl-7 col-lg-7 col-md-7 col-6 order-xl-1 order-lg-2
                  order-md-2 order-2">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-5 col-lg-5 col-md-5 col-6 order-xl-2 order-lg-1
                  order-md-1 order-1">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_1.png" alt="AnImage" />
                    </div>
                    <div class="user_name v2">
                      <h6>Minise</h6>
                      <p>Jacek Jeziak</p>
                      <span class="text_green">$10500</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2 style2">
            <div class="row w-100 align-items-center no-gutters">
              <div
                class="col-xl-7 col-lg-7 col-md-7 col-6 order-xl-1 order-lg-2
                  order-md-2 order-2">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-5 col-lg-5 col-md-5 col-6 order-xl-2 order-lg-1
                  order-md-1 order-1">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_1.png" alt="AnImage" />
                    </div>
                    <div class="user_name v2">
                      <h6>Minise</h6>
                      <p>Jacek Jeziak</p>
                      <span class="text_green">$10500</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="user_match_statistics v2 style2">
            <div class="row w-100 align-items-center no-gutters">
              <div
                class="col-xl-7 col-lg-7 col-md-7 col-6 order-xl-1 order-lg-2
                  order-md-2 order-2">
                <div class="user_stat_list_wrap">
                  <div class="user_stat_list">
                    <ul class="n2">
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>10</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>8</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>1</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>3</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>2</p>
                        </div>
                      </li>
                      <li>
                        <div class="user_stat_list_bottom">
                          <p>0</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-5 col-lg-5 col-md-5 col-6 order-xl-2 order-lg-1
                  order-md-1 order-1">
                <div class="user_img_wrap">
                  <a href="#" class="user_img">
                    <div class="user_avatar">
                      <img src="assets/img/player_1.png" alt="AnImage" />
                    </div>
                    <div class="user_name v2">
                      <h6>Minise</h6>
                      <p>Jacek Jeziak</p>
                      <span class="text_green">$10500</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- upcoming events ends -->
