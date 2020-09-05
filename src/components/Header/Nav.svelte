<script>
  export let segment;
</script>

<ul class="main-menu">
  <li class="nav-item">
    <a class="nav-link" class:active={segment == undefined} href="/">Home</a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link"
      class:active={segment == 'user-profile'}
      href="/user-profile">Games</a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link"
      class:active={segment == 'match'}
      href="/match">Tournaments</a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link"
      class:active={segment == 'discord'}
      href="/discord">Discord</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" class:active={segment == 'about'} href="/">About</a>
  </li>
  <li class="nav-item"><a class="btn v1" href="/">Play</a></li>
</ul>
<div class="hamburger-menu">
  <span class="line-top" />
  <span class="line-center" />
  <span class="line-bottom" />
</div>
