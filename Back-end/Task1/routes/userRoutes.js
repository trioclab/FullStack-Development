const express = require('express');
const router = express.Router();


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tikciz:tikciz%401@cluster0.md7b7.mongodb.net/',{
    dbname: 'Messenger'
}).then(()=>{
    console.log("mongo db connected");
}).catch((err)=>{
    console.log("eroor", err);
})

    const Users = mongoose.model('users', {
        name: String,
        email: String,
        age: Number
    });


router.get('/getUsers', async (req, res) => {
    try {
        const users = await Users.find();
        console.log(users)
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});


router.post('/addUser', async function(req, res){
    const user = new Users({
        name: "NewName",
        email: "example@gmail.com",
        age: 44
    })

    user
    .save()
    .then(()=>{
        res.json({
            status : "Done",
            msg : "Data SENT"
        })
    })
})




router.post('/update-one', async function(req,res){
    let body = req.body;
    console.log(body)

    let doc = await Users.findOneAndUpdate(body.criteria, body.data)

    res.send("Me update k endpoint sy arha hu ")
})


router.post('/update-many', async function (req, res) {
    let body = req.body
    
    let doc = await Users.updateMany(body.criteria, body.data)
    res.json(doc)
})




module.exports = router;
