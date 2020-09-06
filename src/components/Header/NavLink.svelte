<script>
  export let active;
  export let href;
</script>

<li class="nav-item">
  <a class="nav-link" class:active {href}>
    <slot />
  </a>
</li>
