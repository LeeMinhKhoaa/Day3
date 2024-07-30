const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Câu 2
app.get('API/Posts/:id',(req,res)=>{
  const postId = req.params.id;
  res.send(`This is post with id: ${postId}`);
   
})
// Câu 1
app.get('/API/Posts',(req,res) =>{
    res.send("Posts create successfully")
})

// Câu 3
app.post("/API/Posts",(req,res) =>{
  var object = {
    data : req.body,
    message :"Post create sucessfully"
  }
  res.send(object)
})

// Câu 3'
app.put("/API/Posts/:id",(req,res) =>{
  var object = {
    data : req.body,
    message :"Post create sucessfully"
  }
  res.send(object)
})
app.get('/api/posts/:id', (req, res) => {
  const postId = req.params.id;
  res.send(`This is post with id: ${postId}`);
});

// Câu 4 

app.patch("/API/Posts/:id",(req,res) =>{
  var object = {
    data : req.body,
    message :"Post update sucessfully"
  }
  res.send(object)
})
app.delete("/API/Posts/:id",(req,res) =>{
  res.send("Delete sucessfully")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})