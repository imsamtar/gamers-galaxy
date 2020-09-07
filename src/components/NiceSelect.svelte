<script>
  import { onMount } from "svelte";

  onMount(function () {
    setTimeout(() => {
      window.$("select").niceSelect();
    }, 500);
    setInterval(() => {
      window.$("select").niceSelect();
    }, 5000);
  });
</script>
