import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import User from '../models/user.model.js'

import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env.js'

export const signUp = async (req, res, next) => {
    // Inicio de una transaccion con mongoose (operacion atomica)
    const session = await mongoose.startSession()
    session.startTransaction()

    // crear un nuevo usuario
    try {
        const { name, email, password } = req.body

        // validar si el usuario ya se encuentra registrado
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const error = new Error('User already exists')
            error.statusCode = 409
            throw(error)
        }

        // encriptar la contraseña
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // se pasa como segundo parametro la sesion actual de mongoose
        const newUsers = await User.create([{name, email, password: hashPassword}], { session })

        // token de autenticacion
        const token = jwt.sign({
            userId: newUsers[0]._id
        }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

        // confirmar la transaccion si el proceso se ha realizado de forma correcta
        await session.commitTransaction()
        session.endSession()

        // se retorna al cliente como data, el token de autenticacion generado y la informacion del nuevo usuario
        res.status(201).json({
            sucess: true,
            message: 'User created succesfully',
            data: {
                token,
                user: newUsers[0]
            }
        })
    } catch (error) {
        // si ocurre un error, se finalizar la transaccion y se finaliza la sesion de mongoose
        await session.abortTransaction()
        session.endSession()
        next(error)
    }
}

export const signIn = async (req, res, next) => {

}

export const signOut = async (req, res, next) => {

}