const express =require("express");

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to my hotel .... How i can help you?')
})


app.get('/chicken',(req,res)=>{
    res.send('sure sir, I would love to serve chicken')
})


app.get('/idli',(req,res)=>{ 
    const customized_idli={
        name:'rava idli',
        size:'10 cm diameter',
        is_sambhar:true,
        is_chutney:false
    }
    res.send(customized_idli)
   
})

// app.listen(3000, () => {
//   console.log(`Server is running on port: 3000`);
// });



const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);

}); 
