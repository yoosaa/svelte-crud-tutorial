<section>
  <h1>Books</h1>

  <div>
    <a href="https://vitejs.dev" target="_blank"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + <span>Svelte</span></h1>

  <a href="/add" use:link>Add</a>
  <a href="/update">Update</a>
  <div class="card">
    <Counter />
  </div>
</section>

<script>
  import { link } from 'svelte-spa-router'

  import svelteLogo from '../assets/svelte.svg'
  import Counter from '../component/Counter.svelte'
</script>


<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  h1 {
    color: red;
  }
</style>
