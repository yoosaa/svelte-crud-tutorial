import Books from '../pages/Books.svelte'
import Add from '../pages/Add.svelte'
import Update from '../pages/Update.svelte'

export const routes = {
  '/': Books,
  '/add': Add,
  '/update/:id': Update
}