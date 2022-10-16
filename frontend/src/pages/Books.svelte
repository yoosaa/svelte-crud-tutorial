<section>
  <h1>Book Shop</h1>
  <div class="books">
    {#each books as book (book.id)}
      <BookCard {book}/>
    {/each}
  </div>
  <button
    on:click={()=>{push('/add')}}
  >Add</button>
</section>

<script>
  import { push } from 'svelte-spa-router'
  import axios from 'axios'
  import BookCard from '../component/BookCard.svelte'

  let books = []
  const fetchAllBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8800/books")
      books = res.data
    } catch(err) {
      console.error(err)
    }
  }
  fetchAllBooks()
</script>

<style>
  .books {
    display: flex;
  }
</style>
