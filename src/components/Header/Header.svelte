<script>
  import Hamburger from "./Hamburger.svelte";

  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";
  import OfcavasMenu from "./OfcavasMenu.svelte";

  export let segment;
  let scrollY;
  let sticky = false;
  let current = false;

  $: if (scrollY >= 100) {
    sticky = true;
  }
</script>

<style>
  /* Header bar area Start */

  .header-bar-area {
    top: 0;
    left: 0;
    z-index: 999;
    position: fixed;
    width: 100%;
    background: #2d325a;
    padding: 10px 0;
    transition: 0.4s;
    box-shadow: 0 7px 23px rgba(0, 0, 0, 0.2);
  }
  /*sticky START CSS*/

  .header-bar-area.sticky {
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
    -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  }
</style>

<svelte:window bind:scrollY />

<header class="header-bar-area position-fixed" class:sticky>
  <div class="container">
    <div class="row align-items-center">
      <Logo />
      <div
        class="col-xl-8 col-lg-9 col-md-4 col-4 order-xl-2 order-lg-2 order-md-1
          order-1 text-right">
        <Nav {segment} />
        <Hamburger bind:current />
      </div>
    </div>
  </div>
</header>
<OfcavasMenu bind:current />
