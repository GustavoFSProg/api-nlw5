import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  members: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  description: {
    type: String,
  },
  // file: {
  url: {
    type: String,
  },
  type: {
    type: String,
  },
  duration: {
    type: String,
  },
  // },
  publishAt: { type: Date, default: Date.now },
})

export default model('podcastModel', schema)
