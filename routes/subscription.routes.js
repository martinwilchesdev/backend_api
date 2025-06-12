import { Router } from 'express'

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {
    res.send({message: 'GET all subscriptions'})
})

subscriptionRouter.get('/:id', (req, res) => {
    res.send({message: 'GET subscription details'})
})

subscriptionRouter.post('/:id', (req, res) => {
    res.send({message: 'CREATE new subscription'})
})

subscriptionRouter.put('/:id', (req, res) => {
    res.send({message: 'UPDATE subscription'})
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({message: 'DELETE subscription'})
})

// obtener todas las subscripciones de un usuario especifico
subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({message: 'GET all user subscriptions'})
})

// cancelar uuna subscripcion vinculada a un usuario especifico
subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({message: 'CANCEL user subscriptions'})
})

// obtener informacion de las subscripciones que se renovaran
subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({message: 'GET upcoming renewals'})
})

export default subscriptionRouter