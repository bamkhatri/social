const router = require('express').Router()
const User = require('../models/userModal')
const bcrypt = require('bcrypt')
//update user
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      } catch (error) {
        return res.status(500).json(error)
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).json(`Account has been updated ${user}`)
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('You donot have access to this acount')
  }
})

//delete user
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
      res
        .status(200)
        .json(`${user.username} Account has been deleted sucessfully `)
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('You cannot delete  this acount')
  }
})

//get user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, updatedAt, isAdmin, ...ohter } = user._doc
    res.status(200).json(ohter)
  } catch (error) {
    return res.status(500).json(error)
  }
})

//follow user
router.put('/:id/follow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $push: {
            followers: req.body.userId,
          },
        })
        await currentUser.updateOne({
          $push: {
            following: req.params.id,
          },
        })
        res.status(200).json('User has been followed')
      } else {
        res.status(403).json('You already follow this user')
      }
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('You cannot follow yourself')
  }
})

//unfollow user
router.put('/:id/unfollow', async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $pull: {
            followers: req.body.userId,
          },
        })
        await currentUser.updateOne({
          $pull: {
            following: req.params.id,
          },
        })
        res.status(200).json('User has been unfollow')
      } else {
        res.status(403).json('You  dont  follow this user')
      }
    } catch (error) {
      return res.status(500).json(error)
    }
  } else {
    return res.status(403).json('You cannot unfollow yourself')
  }
})

module.exports = router
