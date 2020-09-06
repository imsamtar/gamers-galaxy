<script>
  import { onMount } from "svelte";

  onMount(function () {
    setTimeout(() => {
      window.$("select").niceSelect();
      window.$(".events_list-wrap").niceScroll({
        cursorcolor: "rgb(105, 82, 253)",
        background: "rgb(44, 49, 89)",
        cursorborder: "0px",
        autohidemode: "leave",
      });
    }, 500);
    setInterval(() => {
      window.$("select").niceSelect();
      window.$(".events_list-wrap").niceScroll({
        cursorcolor: "rgb(105, 82, 253)",
        background: "rgb(44, 49, 89)",
        cursorborder: "0px",
        autohidemode: "leave",
      });
    }, 5000);
  });
</script>
