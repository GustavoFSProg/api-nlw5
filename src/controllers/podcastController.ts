import podcastModel from '../models/podcastModel'
import { Request, Response } from 'express'

async function create(req: Request, res: Response) {
  try {
    await podcastModel.create({
      title: req.body.title,
      members: req.body.members,
      thumbnail: req.body.thumbnail,
      description: req.body.description,
      url: req.body.url,
      type: req.body.type,
      duration: req.body.duration,
    })

    return res.status(201).send({ message: 'Podcast Created Successfuly' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function getAll(req: Request, res: Response) {
  try {
    const data = await podcastModel.find()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ erro: 'erro do Get' })
  }
}

async function getThree(req: Request, res: Response) {
  try {
    const data = await podcastModel.find().limit(3)

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ erro: 'erro do Get' })
  }
}

async function deleteAll(req: Request, res: Response) {
  try {
    await podcastModel.deleteMany()

    return res.status(200).send({ message: 'Tudo Apagado!!' })
  } catch (error) {
    return res.status(400).send({ message: 'Deu Erro!!', error })
  }
}

async function getById(req: Request, res: Response) {
  try {
    const data = await podcastModel.findById(req.params.id)

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { create, getThree, getById, deleteAll, getAll }
