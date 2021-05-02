import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'
import mongoose from 'mongoose'

dotenv.config()

mongoose.connect(String(process.env.DATABASE_KEY), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})

const { PORT } = process.env

const api = express()

api.use(express.json())
api.use(cors())
api.use(routes)

api.listen(PORT, () => {
  console.log(`API running on PORT: ${PORT}`)
})
