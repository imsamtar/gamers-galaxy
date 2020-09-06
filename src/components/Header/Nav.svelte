<script>
  import Hamburger from "./Hamburger.svelte";
  import NavLink from "./NavLink.svelte";
  import PlayBtn from "./PlayBtn.svelte";

  export let segment;
</script>

<ul class="main-menu">
  <NavLink active={segment == undefined} href="/">Home</NavLink>
  <NavLink active={segment == 'user-profile'} href="/user-profile">
    Games
  </NavLink>
  <NavLink active={segment == 'match'} href="/match">Tournaments</NavLink>
  <NavLink active={segment == 'discord'} href="/discord">Discord</NavLink>
  <NavLink active={segment == 'about'} href="/about">About</NavLink>
  <PlayBtn />
</ul>
