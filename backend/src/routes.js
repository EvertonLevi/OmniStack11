const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router()

routes.get('/ongs', OngController.index)

//erro 500 tratado na index com o erros do celebrate
routes.post('/ongs', celebrate({
 [Segments.BODY]: Joi.object().keys({
  name: Joi.string().required().min(2),
  email: Joi.string().required().email(),
  whatsapp: Joi.string().required().min(10).max(11),
  city: Joi.string().required(),
  uf: Joi.string().required().length(2)
 })
}), OngController.create)

routes.post('/session', SessionController.create)

routes.get('/profile', celebrate({
 [Segments.HEADERS]: Joi.object({
  authorization: Joi.string().required(),
 }).unknown()
}), ProfileController.index)

routes.get('/incidents', celebrate({
 [Segments.QUERY]: Joi.object().keys({
  page: Joi.number()
 })
}), IncidentsController.index)

routes.post('/incidents', IncidentsController.create)
routes.delete('incidents/:id', celebrate({
 [Segments.PARAMS]: Joi.object().keys({
  id: Joi.number().required()
 })
}), IncidentsController.delete)

module.exports = routes