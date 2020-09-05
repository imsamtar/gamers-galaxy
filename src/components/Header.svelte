<script>
  import Nav from "./Header/Nav.svelte";

  export let segment;
  let scrollY;
  let sticky = false;

  $: if (scrollY >= 100) {
    sticky = true;
  }
</script>

<svelte:window bind:scrollY />

<header class="header-bar-area position-fixed" class:sticky>
  <div class="container">
    <div class="row align-items-center">
      <div
        class="col-xl-4 col-lg-3 col-md-8 col-8 order-xl-1 order-lg-1 order-md-2
          order-2">
        <a class="navbar-brand" href="index.html">
          <img src="assets/img/logo.png" alt="Logo" />
        </a>
      </div>
      <div
        class="col-xl-8 col-lg-9 col-md-4 col-4 order-xl-2 order-lg-2 order-md-1
          order-1 text-right">
        <Nav {segment} />
      </div>
    </div>
  </div>
</header>
