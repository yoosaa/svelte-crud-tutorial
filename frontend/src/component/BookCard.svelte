<div class="book">
  {#if book.cover}
    <img src={book.cover} alt="" />
  {/if}
  <h2>{book.title}</h2>
  <p>{book.desc}</p>
  <span>{book.price}</span>
  <button class="delete"
    on:click={()=>{handleDelete(book.id)}}
  >Delete</button>
  <button class="update"
    on:click={()=>{push(`/update/${book.id}`)}}
  >Update</button>
</div>

<script>
  import axios from 'axios'
  import { push } from 'svelte-spa-router'
  // props
  export let book

  const handleDelete = async id => {
    try {
      await axios.delete("http://localhost:8800/books/"+id)
      window.location.reload()
    } catch(err) {
      console.error(err)
    }
  }
</script>

<style lang="scss">
  .book {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    .delete {
      border: none;
      padding: 3px 6px;
      background-color: white;
      cursor: pointer;
      border: 1px solid rgb(245, 191, 191);
      color: rgb(242, 100, 100);
    }
    .update {
      border: none;
      padding: 3px 6px;
      background-color: white;
      cursor: pointer;
      border: 1px solid rgb(204, 204, 243);
      color: rgb(139, 139, 234);
    }
  }
</style>
