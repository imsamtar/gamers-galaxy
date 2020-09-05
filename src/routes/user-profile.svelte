<script>
  import SwiperSetup from "../components/Swipers/Setup.svelte";
</script>

<svelte:head>
  <title>Gamers Galaxy</title>
</svelte:head>

<SwiperSetup />
<div class="content_wrapper">
  <section class="player_box_wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="player_box">
            <div class="player_box_left">
              <div class="player_img">
                <img src="assets/img/img_40.png" alt="Image" />
              </div>
              <div class="player_name">
                <h4>Celrate</h4>
                <p>Casper Anderson <span>22 years</span></p>
                <ul>
                  <li>
                    <a href="#"><a href="#"><img
                          src="assets/img/img_38.png"
                          alt="Image" /></a></a>
                  </li>
                  <li>
                    <a href="#"><img src="assets/img/img_41.png" alt="Image" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="player_box_right">
              <p>Team : <span>Singularity</span></p>
              <ul>
                <li><img src="assets/img/user_1.png" alt="Image" /></li>
                <li><img src="assets/img/user_3.png" alt="Image" /></li>
                <li><img src="assets/img/user_4.png" alt="Image" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Info section starts -->
  <section class="info_section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="box_title">
            <div class="box_title_left">
              <h2>Info</h2>
            </div>
            <div class="box_title_right">
              <p>Celrate statistics <span>(Past 3 months)</span></p>
            </div>
          </div>
          <div class="info_box">
            <ul class="nav nav-tabs list-details-tab">
              <li class="nav-item active">
                <a class="active" data-toggle="tab" href="#user_1"><img
                    src="assets/img/user_1.png"
                    alt="Image" /></a>
              </li>
              <li class="nav-item">
                <a data-toggle="tab" href="#user_2"><img
                    src="assets/img/user_3.png"
                    alt="Image" /></a>
              </li>
              <li class="nav-item">
                <a data-toggle="tab" href="#user_3"><img
                    src="assets/img/user_4.png"
                    alt="Image" /></a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="user_1">
                <div class="info_item_wrap">
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Rating 2.0</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_29.png" alt="Image" />
                      </div>
                      <span>1.01</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Kills Per round</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_29.png" alt="Image" />
                      </div>
                      <span>0.65</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Headshots</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_30.png" alt="Image" />
                      </div>
                      <span>52.6%</span>
                    </div>
                  </div>
                </div>
                <div class="info_item_wrap">
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Maps layed</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar"><span>Low Activity</span></div>
                      <span>48</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Deaths Per round</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_30.png" alt="Image" />
                      </div>
                      <span>0.65</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Round Contributed</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_29.png" alt="Image" />
                      </div>
                      <span>67.7%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="user_2">
                <div class="info_item_wrap">
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Rating 2.0</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_29.png" alt="Image" />
                      </div>
                      <span>1.01</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Kills Per round</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_29.png" alt="Image" />
                      </div>
                      <span>0.65</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Headshots</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_30.png" alt="Image" />
                      </div>
                      <span>52.6%</span>
                    </div>
                  </div>
                </div>
                <div class="info_item_wrap">
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Maps layed</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar"><span>Low Activity</span></div>
                      <span>48</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Deaths Per round</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_30.png" alt="Image" />
                      </div>
                      <span>0.65</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Round Contributed</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_29.png" alt="Image" />
                      </div>
                      <span>67.7%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="user_3">
                <div class="info_item_wrap">
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Rating 2.0</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_29.png" alt="Image" />
                      </div>
                      <span>1.01</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Kills Per round</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_29.png" alt="Image" />
                      </div>
                      <span>0.65</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Headshots</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_30.png" alt="Image" />
                      </div>
                      <span>52.6%</span>
                    </div>
                  </div>
                </div>
                <div class="info_item_wrap">
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Maps layed</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar"><span>Low Activity</span></div>
                      <span>48</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Deaths Per round</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_30.png" alt="Image" />
                      </div>
                      <span>0.65</span>
                    </div>
                  </div>
                  <div class="info_item">
                    <div class="info_item_left">
                      <p>Round Contributed</p>
                    </div>
                    <div class="info_item_right">
                      <div class="stat_bar">
                        <img src="assets/img/img_29.png" alt="Image" />
                      </div>
                      <span>67.7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="box_title">
            <div class="box_title_left">
              <h2>Teams</h2>
            </div>
          </div>
          <div class="info_item_wrap">
            <div class="info_item">
              <div class="info_item_left">
                <p>Feb 2020 - Present</p>
              </div>
              <a href="#" class="info_item_right">
                <div class="stat_bar">
                  <img src="assets/img/img_20.png" alt="Image" />
                </div>
                <span>Singularity</span>
              </a>
              <div class="match_stats">
                <a class="stat_btn" href="#">Stats</a>
              </div>
            </div>
            <div class="info_item v2">
              <div class="info_item_left">
                <p>Apr 2019 - Jun 2019</p>
              </div>
              <a href="#" class="info_item_right">
                <div class="stat_bar">
                  <img src="assets/img/img_31.png" alt="Image" />
                </div>
                <span>STEP</span>
              </a>
              <div class="match_stats">
                <a class="stat_btn" href="#">Stats</a>
              </div>
            </div>
            <div class="info_item v2">
              <div class="info_item_left">
                <p>Headshots</p>
              </div>
              <a href="#" class="info_item_right">
                <div class="stat_bar">
                  <img src="assets/img/img_32.png" alt="Image" />
                </div>
                <span>Team123</span>
              </a>
              <div class="match_stats">
                <a class="stat_btn" href="#">Stats</a>
              </div>
            </div>
            <div class="view_more_btn"><a href="#">View more</a></div>
          </div>
          <div class="box_title mt-4">
            <div class="box_title_left">
              <h2>About</h2>
            </div>
          </div>
          <div class="info_item_wrap v2">
            <div class="info_item">
              <div class="info_item_left">
                <p>Gamer Galaxy</p>
              </div>
              <div class="info_item_right"><span>Join: 08/24/009</span></div>
            </div>
            <div class="info_item">
              <div class="info_item_left">
                <p>Favourite Games</p>
              </div>
              <div class="info_item_right"><span>CS:Go</span></div>
            </div>
            <div class="info_item v2">
              <div class="info_item_left">
                <p>Lorem Ipsum</p>
              </div>
              <div class="info_item_right"><span>dolore</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row maf_v1">
        <div class="col-md-12">
          <div class="row">
            <div class="col-lg-6">
              <div class="box_title">
                <div class="box_title_left">
                  <h2>Last matches</h2>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <ul class="nav nav-tabs sec_tab">
                <li class="nav-item active">
                  <a class="active" data-toggle="tab" href="#tab_1">CS:GO</a>
                </li>
                <li class="nav-item">
                  <a data-toggle="tab" href="#tab_2">Fortnite</a>
                </li>
                <li class="nav-item">
                  <a data-toggle="tab" href="#tab_3">Valorant</a>
                </li>
              </ul>
              <div class="tab-content sec_tab_content">
                <div class="tab-pane fade show active" id="tab_1">
                  <div class="row">
                    <div class="col-lg-10 col-md-12">
                      <h6 class="subtitle">Upcoming matches for Celrate</h6>
                      <div class="mb-5 user_match_stat_header_wrap">
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>20/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_37.png" alt="Image" />
                            <span>PACT</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>25/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_31.png" alt="Image" />
                            <span>STEP</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>30/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_32.png" alt="Image" />
                            <span>Team123</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>07/08/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_21.png" alt="Image" />
                            <span>Copenhegen Flames</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                      </div>
                      <h6 class="subtitle">Latest results for Celrates</h6>
                      <div class="mb-5 user_match_stat_header_wrap">
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>20/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_37.png" alt="Image" />
                            <span>PACT</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>25/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_31.png" alt="Image" />
                            <span>STEP</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>30/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_32.png" alt="Image" />
                            <span>Team123</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>07/08/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_21.png" alt="Image" />
                            <span>Copenhegen Flames</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab_2">
                  <div class="row">
                    <div class="col-lg-10 col-md-12">
                      <h6 class="subtitle">Upcoming matches for Celrate</h6>
                      <div class="mb-5 user_match_stat_header_wrap">
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>20/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_37.png" alt="Image" />
                            <span>PACT</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>25/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_31.png" alt="Image" />
                            <span>STEP</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>30/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_32.png" alt="Image" />
                            <span>Team123</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>07/08/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_21.png" alt="Image" />
                            <span>Copenhegen Flames</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                      </div>
                      <h6 class="subtitle">Latest results for Celrates</h6>
                      <div class="mb-5 user_match_stat_header_wrap">
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>20/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_37.png" alt="Image" />
                            <span>PACT</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>25/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_31.png" alt="Image" />
                            <span>STEP</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>30/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_32.png" alt="Image" />
                            <span>Team123</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>07/08/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_21.png" alt="Image" />
                            <span>Copenhegen Flames</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab_3">
                  <div class="row">
                    <div class="col-lg-10 col-md-12">
                      <h6 class="subtitle">Upcoming matches for Celrate</h6>
                      <div class="mb-5 user_match_stat_header_wrap">
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>20/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_37.png" alt="Image" />
                            <span>PACT</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>25/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_31.png" alt="Image" />
                            <span>STEP</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>30/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_32.png" alt="Image" />
                            <span>Team123</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>07/08/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_21.png" alt="Image" />
                            <span>Copenhegen Flames</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                      </div>
                      <h6 class="subtitle">Latest results for Celrates</h6>
                      <div class="mb-5 user_match_stat_header_wrap">
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>20/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_37.png" alt="Image" />
                            <span>PACT</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>25/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_31.png" alt="Image" />
                            <span>STEP</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>30/07/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_32.png" alt="Image" />
                            <span>Team123</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                        <div class="user_match_stat_header v2">
                          <div class="date">
                            <p>07/08/2020</p>
                          </div>
                          <div class="match_results_wrap">
                            <a href="#">Singularity</a>
                            <div class="team-logo">
                              <a href="#"><img
                                  src="assets/img/img_20.png"
                                  alt="Image" /></a>
                            </div>
                            <div class="match_results v2">
                              <span>0</span> : <span>0</span>
                            </div>
                          </div>
                          <a href="#" class="match_winner">
                            <img src="assets/img/img_21.png" alt="Image" />
                            <span>Copenhegen Flames</span>
                          </a>
                          <div class="match_stats">
                            <a href="#"><a href="#"><img
                                  src="assets/img/img_38.png"
                                  alt="Image" /></a></a>
                            <a class="stat_btn" href="#">Stats</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="box_title v2">
            <div class="box_title_left">
              <h2>Matches</h2>
            </div>
            <div class="box_title_right">
              <div class="step_switch_box">
                <h5>Advanced Statistics</h5>
                <div class="switch_wrap">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round_box" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="page_num">
            <ul>
              <li>
                <a href="#"><img src="assets/img/prev.png" alt="Image" /></a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a class="active" href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">...</a></li>
              <li><a href="#">10</a></li>
              <li>
                <a href="#"><img src="assets/img/next.png" alt="Image" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Info section ends -->
</div>
<!-- content section ends -->
<!-- upcoming events starts -->
<section class="user_match_stat">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-md-12 mb-3">
        <div class="user_match_stat_wrap v5">
          <div class="user_match_stat_header mb-30">
            <div class="date">
              <p>07/08/2020</p>
            </div>
            <div class="match_results_wrap">
              <a href="#">Singularity</a>
              <div class="team-logo">
                <a href="#"> <img src="assets/img/img_20.png" alt="Image" /></a>
              </div>
              <div class="match_results"><span>2</span> : <span>1</span></div>
            </div>
            <a href="#" class="match_winner">
              <img src="assets/img/img_21.png" alt="Image" />
              <span>Copenhagen Flames</span>
            </a>
            <div class="match_stats">
              <a class="stat_btn" href="#">Stats</a>
            </div>
          </div>
          <div class="user_match_statistics">
            <div class="user_img">
              <div class="user_avatar">
                <img src="assets/img/img_28.png" alt="Image" />
              </div>
              <div class="user_name">
                <h6>Celrate</h6>
                <p>Casper Andersen</p>
              </div>
            </div>
            <div class="user_stat_list">
              <ul>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_22.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>10</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_23.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>8</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_24.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>1</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_25.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>3</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_26.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>2</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_27.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>0</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>ADR</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>1.16</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>UD</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>5</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>EF</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>5</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>ULTS</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>7</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>$</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>10500</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="user_match_stat_wrap v5">
          <div class="user_match_stat_header mb-30">
            <div class="date">
              <p>07/08/2020</p>
            </div>
            <div class="match_results_wrap">
              <a href="#">Singularity</a>
              <div class="team-logo">
                <a href="#"> <img src="assets/img/img_20.png" alt="Image" /></a>
              </div>
              <div class="match_results"><span>2</span> : <span>1</span></div>
            </div>
            <a href="#" class="match_winner">
              <img src="assets/img/img_21.png" alt="Image" />
              <span>Copenhagen Flames</span>
            </a>
            <div class="match_stats">
              <a class="stat_btn" href="#">Stats</a>
            </div>
          </div>
          <div class="user_match_statistics">
            <div class="user_img">
              <div class="user_avatar">
                <img src="assets/img/img_28.png" alt="Image" />
              </div>
              <div class="user_name">
                <h6>Celrate</h6>
                <p>Casper Andersen</p>
              </div>
            </div>
            <div class="user_stat_list">
              <ul>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_22.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>10</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_23.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>8</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_24.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>1</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_25.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>3</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_26.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>2</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_27.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>0</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>ADR</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>1.16</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>UD</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>5</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>EF</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>5</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>ULTS</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>7</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>$</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>10500</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="user_match_stat_wrap v5">
          <div class="user_match_stat_header mb-30">
            <div class="date">
              <p>07/08/2020</p>
            </div>
            <div class="match_results_wrap">
              <a href="#">Singularity</a>
              <div class="team-logo">
                <a href="#"> <img src="assets/img/img_20.png" alt="Image" /></a>
              </div>
              <div class="match_results"><span>2</span> : <span>1</span></div>
            </div>
            <a href="#" class="match_winner">
              <img src="assets/img/img_21.png" alt="Image" />
              <span>Copenhagen Flames</span>
            </a>
            <div class="match_stats">
              <a class="stat_btn" href="#">Stats</a>
            </div>
          </div>
          <div class="user_match_statistics">
            <div class="user_img">
              <div class="user_avatar">
                <img src="assets/img/img_28.png" alt="Image" />
              </div>
              <div class="user_name">
                <h6>Celrate</h6>
                <p>Casper Andersen</p>
              </div>
            </div>
            <div class="user_stat_list">
              <ul>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_22.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>10</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_23.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>8</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_24.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>1</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_25.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>3</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_26.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>2</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <img src="assets/img/img_27.png" alt="Image" />
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>0</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>ADR</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>1.16</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>UD</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>5</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>EF</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>5</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>ULTS</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>7</p>
                  </div>
                </li>
                <li>
                  <div class="user_stat_list_top">
                    <p>$</p>
                  </div>
                  <div class="user_stat_list_bottom">
                    <p>10500</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
