const router = require('express').Router()
const Post = require('../models/postModal')

//create post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savePost = await newPost.save()
    res.status(200).json(savePost)
  } catch (error) {
    res.status(500).json(error)
  }
})

//updatepost a post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json('Post has been update sucessfully !')
    } else {
      res.status(403).json('You can only update your post')
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

//deletepost a post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.deleteOne()
      res.status(200).json('Post has been deleted sucessfully')
    } else {
      res.status(403).json('You can only delete your post')
    }
  } catch (error) {
    res.status(500).json(error)
  }
})
//like a post
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      })
      res.status(200).json(`Post is liked By ${post.userId} `)
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      })
      res.status(200).json(`Post is disliked By ${post.userId} `)
    }
  } catch (error) {
    res.status(500).json(error)
  }
})
//get a post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

// get all post

module.exports = router
