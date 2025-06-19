import { Router } from 'express' // enrutador de express
import { getUser, getUsers } from '../controllers/user.controller.js'

// extraer token de autenticacion
import authMiddleware from '../middlewares/auth.middleware.js'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser, authMiddleware) // middleware de validacion de la autenticacion encadenado a la ruta

userRouter.post('/', (req, res) => {
    res.send({message: 'CREATE a new user'})
})

userRouter.put('/:id', (req, res) => {
    res.send({message: 'UPDATE user by id'})
})

userRouter.delete('/:id', (req, res) => {
    res.send({message: 'DELETE a user'})
})

export default userRouter