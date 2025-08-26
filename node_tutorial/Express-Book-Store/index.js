const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 8000;

// In Memory DB

const books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" },
];

//Middlewares (Plugins)

app.use(express.json());
// app.use(express.text());

//Routes
app.get("/books", (req, res) => {
  // res.setHeader("x-sunil", "sunil hatila"); // exp of custom header add
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `id must be type of number` });
  const book = books.find((e) => e.id == id); //SELECT * from books where id={id}
  if (!book)
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exists` });
  return res.json(book);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || title === "")
    return res.status(400).json({ error: "title is required" });

  if (!author || author === "")
    return res.status(400).json({ error: "author is required" });
  const id = books.length + 1;

  const book = { id, title, author };
  books.push(book);
  console.log(req.headers);
  console.log(req.body);
  return res.status(201).json({ message: "Book created success", id });
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id))
    return res.status(400).json({ error: `id must be of type number` });
  const indexToDelete = books.findIndex((e) => e.id === id);
  if (indexToDelete < 0)
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exists` });
  books.splice(indexToDelete, 1);
  return res.status(200).json({ message: "book deleted" });
});

app.listen(PORT, () => console.log(`Http server is running on PORT ${PORT}`));
