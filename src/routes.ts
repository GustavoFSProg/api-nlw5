import { Router, Request, Response } from 'express'
import podCastController from './controllers/podcastController'

const routes = Router()

routes.get('/', podCastController.getAll)
routes.get('/getThree', podCastController.getThree)
routes.get('/getById/:id', podCastController.getById)
// routes.delete('/deleteAll', podCastController.deleteAll)
routes.post('/register', podCastController.create)

export default routes
