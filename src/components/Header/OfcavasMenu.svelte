<script>
  export let current;

  function close() {
    current = false;
  }
</script>

<style>
  /*ofcanvas-menu*/

  .ofcavas-menu {
    position: fixed;
    width: 85%;
    height: 100%;
    background: #242848;
    z-index: 9999;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    left: -100%;
    transition: 0.3s;
    margin: 76px 0 0 0;
    padding: 50px 0 42px 20px;
  }

  .ofcavas-menu.current {
    left: 0;
  }

  .ofcavas-menu ul.navbar-nav {
    margin: 0;
    list-style: none;
    text-align: left;
  }

  .ofcavas-menu ul.navbar-nav li a {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    padding: 10px 0 10px;
    display: block;
  }

  .ofcavas-menu ul.navbar-nav li a.active {
    color: #6a54fd;
  }

  .social-link {
    padding: 10% 0 20% 0;
  }

  .ofcavas-menu ul.navbar-nav li a.btn.v1 {
    padding: 7px 38px !important;
    margin-top: 28px;
  }

  .social-link li {
    display: inline-block;
    margin: 0 15px;
  }

  .social-link li:first-child {
    margin-left: 0;
  }

  .social-link li img {
    max-width: 26px;
  }

  .body_overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: -9;
    visibility: hidden;
    opacity: 0;
    cursor: pointer;
  }

  .body_overlay.open {
    z-index: 99;
    visibility: visible;
    opacity: 0.05;
  }
</style>

<div class="ofcavas-menu" class:current>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link active" href="index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="user-profile.html">Games</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="match.html">Tournaments</a>
    </li>
    <li class="nav-item"><a class="nav-link" href="/">Discord</a></li>
    <li class="nav-item"><a class="nav-link" href="/">About</a></li>
    <li class="nav-item"><a href="/" class="btn v1">Play</a></li>
  </ul>
  <ul class="social-link">
    <li><a href="/"><img src="assets/img/icon_1.png" alt="AnImage" /></a></li>
    <li><a href="/"><img src="assets/img/icon_2.png" alt="AnImage" /></a></li>
    <li><a href="/"><img src="assets/img/icon_3.png" alt="AnImage" /></a></li>
    <li><a href="/"><img src="assets/img/icon_4.png" alt="AnImage" /></a></li>
    <li><a href="/"><img src="assets/img/icon_5.png" alt="AnImage" /></a></li>
  </ul>
</div>
<div class="body_overlay" class:open={current} on:click={close} />
