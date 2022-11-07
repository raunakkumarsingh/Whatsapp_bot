const  connectToMongo =require('./db');
var cors=require('cors')
const express = require('express')
require('dotenv').config() 

connectToMongo(); 
const app = express()
const port = process.env.PORT || 4000;
app.use(express.json())
app.use(cors())

app.use('/api',require('./routes/whatsapp'))



app.get('/', (req, res) => {
  res.send('hello world')
}),

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})