<script>
  import BackToTop from "../components/BackToTop.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header/Header.svelte";
  import NiceSelect from "../components/NiceSelect.svelte";
  import OfcavasMenu from "../components/OfcavasMenu.svelte";
  import Preloader from "../components/Preloader.svelte";

  export let segment;
</script>

<style>
</style>

<Preloader {segment} />
<div class="page_wrapper">
  <Header {segment} />
  <OfcavasMenu />
  <slot />

  <Footer />
</div>
<BackToTop />
<NiceSelect />
