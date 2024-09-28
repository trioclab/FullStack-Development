const express = require('express')
const mongoose = require('mongoose')


const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://tikciz:tikciz%401@cluster0.md7b7.mongodb.net/FormData')

app.post('./register' , (req , res) =>{
    FormDataModel.create(req.body)
    .then(FormData => res.json(FormData))
    .catch(err => console.log(err))
})
app.listen(3001 , ()=>{
    console.log("Server is Running")
})