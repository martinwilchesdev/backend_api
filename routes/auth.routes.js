import { Router } from 'express' // enrutador de express
import { signIn, signUp, signOut } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.post('/sign-up', signUp)
authRouter.post('/sign-in', signIn)
authRouter.post('/logout', signOut)

export default authRouter