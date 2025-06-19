import jwt from 'jsonwebtoken'

import { JWT_SECRET } from '../config/env.js'
import User from '../models/user.model.js'

const authorize = async (req, res, next) => {
    try {
        // obtener el valor del header authorization
        const authorization = req.get('authorization')
        let token

        if (authorization && authorization.startsWith('Bearer ')) {
            token = authorization.replace('Bearer ', '')
        }

        if (!token) return res.status(401).json({ message: 'Unauthorized' })

        // validacion del token de autenticacion proporcionado
        const decoded = jwt.verify(token, JWT_SECRET)

        const user = await User.findById(decoded.userId)

        if (!user) return res.status(401).json({ message: 'Unauthorized' })

        req.user = user

        next()
    } catch(error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message })
    }
}

export default authorize