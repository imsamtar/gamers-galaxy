<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  section {
    margin-top: 80px;
    padding: 1rem;
    min-height: 80vh;
  }
  h1 {
    font-size: 3rem;
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<section>
  <h1>{status}</h1>

  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</section>
