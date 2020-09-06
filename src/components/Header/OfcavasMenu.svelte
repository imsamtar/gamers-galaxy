<script>
  export let current;

  function close() {
    current = false;
  }
</script>

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
