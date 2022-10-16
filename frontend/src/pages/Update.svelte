<section class="form">
  <h1>Update the Book</h1>
  <input type="text" placeholder="title"
    bind:value={book.title}
  name="title" />
  <input type="text" placeholder="desc"
    bind:value={book.desc}
  name="desc" />
  <input type="number" placeholder="price"
    bind:value={book.price}
  name="price" />
  <input type="text" placeholder="cover"
    bind:value={book.cover}
  name="cover" />
  <button class="formButton"
    on:click|preventDefault={handleClick}
  >Update</button>
</section>

<script>
  import axios from 'axios'
  import { push } from 'svelte-spa-router'

  const book = {
    title: '',
    desc: '',
    price: null,
    cover: '',
  }

  export let params = {}
  const bookId = params.id
  const handleClick = async () => {
    try{
      await axios.put("http://localhost:8800/books/" + bookId, book)
      push('/')
    }catch(err){
      console.log(err)
    }
  }
</script>
