<script>
  export let current = false;
  function click(event) {
    current = !current;
    // $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
    // $('.hamburger-menu .line-center').toggleClass('current');
    // $('.hamburger-menu .line-bottom').toggleClass('current');
  }
</script>

<div class="hamburger-menu" class:current on:click={click}>
  <span class="line-top" class:current />
  <span class="line-center" class:current />
  <span class="line-bottom" class:current />
</div>
