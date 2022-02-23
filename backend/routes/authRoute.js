const router = require('express').Router()
const User = require('../models/userModal')
const bcrypt = require('bcrypt')

//Register user
router.post('/register', async (req, res) => {
  try {
    //generate hashed password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })
    //save and respond
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
  }
})

//LOGIN
router.post('/login', async (req, res) => {
  const user = new User({})
})

module.exports = router
