const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('hey this rest api')
})

module.exports = router
