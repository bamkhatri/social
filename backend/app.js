const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')

const app = express()

//dotenv
dotenv.config()

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err))
//Middlewire
app.use(helmet())
app.use(morgan('common'))
app.use(express.json())

//routes
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)

//Port number
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
