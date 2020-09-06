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
