<script>
  export let points;
  export let round;
</script>

<ul class="result_count">
  <li>
    <span
      class={points[0] == 'W' ? 'text_green' : 'text_red'}>{points[0]}</span>
  </li>
  <li><span>{round}</span></li>
  <li>
    <span
      class={points[1] == 'W' ? 'text_green' : 'text_red'}>{points[1]}</span>
  </li>
</ul>
