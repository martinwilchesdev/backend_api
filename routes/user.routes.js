import { Router } from 'express' // enrutador de express

const userRouter = Router()

userRouter.get('/', (req, res) => {
    res.send({message: 'GET all users'})
})

userRouter.get('/:id', (req, res) => {
    res.send({message: 'GET user details'})
})

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