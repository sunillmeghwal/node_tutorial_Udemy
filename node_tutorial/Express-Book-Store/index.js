const { error } = require("console");

const { loggerMiddleware } = require("./middlewares/logger");

const bookRouter = require("./routes/book.routes");
const express = require("express");
const app = express();
const PORT = 8000;

//Middlewares (Plugins)

app.use(express.json());
// app.use(express.text());

app.use(function (req, res, next) {
  console.log("I am Middleware A");
  next();
});

// app.use(function (req, res, next) {
//   console.log("I am Middleware B");
//   return res.json({ msg: "Boom! I am B" });
// });

app.use(function (req, res, next) {
  console.log("I am Middleware B");
  next();
});

//Routes
app.use("/books", bookRouter);

app.listen(PORT, () => console.log(`Http server is running on PORT ${PORT}`));
