<script>
  export let active;
  export let href;
</script>

<style>
  .nav-item {
    display: inline-block;
    position: relative;
  }

  .nav-link:after {
    position: absolute;
    bottom: -30px;
    left: 0;
    content: "";
    background: #6851fb;
    width: 0;
    height: 3px;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
  }

  .nav-link.active:after,
  .nav-link:hover:after {
    width: 100%;
    visibility: visible;
    opacity: 1;
  }

  .nav-item .nav-link {
    color: #fff;
    text-transform: capitalize;
    font-weight: 400;
    line-height: 1;
    padding: 0 5px;
  }
</style>

<li class="nav-item">
  <a class="nav-link" class:active {href}>
    <slot />
  </a>
</li>
