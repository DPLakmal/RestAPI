const express = require('express') 
const router = express.Router()
const User = require('../models/model')
module.exports = router;




//Get all
router.get('/', async (req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

//Create one
router.post('/', async (req,res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    try {
        const userToSave = await user.save()
        res.json(userToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
  
})

//Read one
router.get('/:id', async(req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(data)
        
   } catch (error) {
    res.status(500).json({message: error.message})
   }
})

//Update one
router.patch('/:id',async (req,res) => {
   try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true};

    const result = await User.findByIdAndUpdate(id,updatedData,options)
    res.json(result)
   } catch (error) {
    res.status(400).json({message: error.message})
   }
})

//Delete one
router.delete('/:id',async (req,res) => {
   try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id)
    res.send(`${user.username} has been deleted!`)
    
   } catch (error) {
    res.status(400).json({meessage: error.meessage})
   }
})