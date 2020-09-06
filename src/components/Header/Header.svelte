<script>
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";

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
      <Logo />
      <Nav {segment} />
    </div>
  </div>
</header>
