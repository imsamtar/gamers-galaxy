<style>
  .hero_banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 35px;
    border-radius: 25px;
    margin-bottom: 35px;
    background: #2d325a;
    position: relative;
  }

  .hero_banner:after {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    background-image: url(/assets/img/hero_3.png);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    background-position: top center;
    z-index: 0;
    width: 275px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .hero_banner_text {
    position: relative;
    z-index: 9;
  }

  .hero_banner_text h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 20px;
  }

  .hero_banner_text p {
    font-size: 14px;
    line-height: 20px;
    margin: 0;
    font-weight: 500;
  }
</style>

<div class="container">
  <div class="hero_banner">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-5 col-lg-6 col-md-8">
          <div class="hero_banner_text">
            <h1>Welcome to Gamer Galaxy!</h1>
            <p>
              Who are we? We're a small video game streaming and playing
              community. We're always open to new members so join us on Discord
              today!
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
