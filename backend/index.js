import express from 'express'
import mysql from "mysql2"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.json("hello this is the bakcend")
})

app.get("/books", (req, res) => {
  const query = "SELECT * FROM books"
  db.query(query, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post("/books", (req, res) => {
  const query = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)"
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover
  ]
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json("books has been created success!!")
  })
})

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id
  const query = "DELETE FROM books WHERE id = ?"
  db.query(query, [bookId], (err, data) => {
    if (err) return res.json(err)
    return res.json("books has been deleted success!!")
  })
})

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id
  const query = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?"
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover
  ]
  db.query(query, [...values, bookId], (err, data) => {
    if (err) return res.json(err)
    return res.json("books has been update success!!")
  })
})

app.listen(8800, () => {
  console.log('connected to backend!')
})