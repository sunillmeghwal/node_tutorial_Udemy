const express = require("express");
const app = express();
// const port = 3000;

app.get("/", (req, res) => {

  res.send("Hello World!");
});

app.get("/contact-us", function (req, res) {
  res.end("You can contact me at my email address");
});

app.get('/tweets',(req,res)=>{
    res.end('Here are your tweets')
})

app.post("/tweets", (req, res) => {
  res.status(201).end("Tweet Created Sucessfully");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


app.listen(8000,()=>console.log('Server is running on PORT:8000'));