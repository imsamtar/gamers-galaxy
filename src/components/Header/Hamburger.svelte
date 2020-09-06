<script>
  export let current = false;
  function click(event) {
    current = !current;
    // $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
    // $('.hamburger-menu .line-center').toggleClass('current');
    // $('.hamburger-menu .line-bottom').toggleClass('current');
  }
</script>

<style>
  .hamburger-menu {
    display: none;
  }

  @media (max-width: 991px) {
    .hamburger-menu {
      cursor: pointer;
      display: block;
    }
  }

  .hamburger-menu span {
    background: #fff;
    width: 30px;
    height: 2px;
    display: block;
    margin: 6px 0;
    transition: all 0.3s ease;
  }

  .hamburger-menu:hover .line-top {
    transform: translateY(-100%);
  }

  .hamburger-menu:hover .line-bottom {
    transform: translateY(100%);
  }

  .hamburger-menu:hover .line-top.current,
  .hamburger-menu:hover .line-bottom.current {
    transform: 0;
  }

  .hamburger-menu .line-top.current {
    transform: translateY(460%) rotate(135deg);
  }

  .hamburger-menu .line-center.current {
    opacity: 0;
  }

  .hamburger-menu .line-bottom.current {
    transform: translateY(-325%) rotate(-135deg);
  }
</style>

<div class="hamburger-menu" class:current on:click={click}>
  <span class="line-top" class:current />
  <span class="line-center" class:current />
  <span class="line-bottom" class:current />
</div>
