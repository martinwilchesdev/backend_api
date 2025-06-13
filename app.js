import express from 'express'
import { PORT } from './config/env.js'

const app = express()

// rutas
import authRouter from './routes/auth.routes.js'
import usersRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'

// mongodb
import connectDatabase from './database/mongodb.js'

// middlewares de enrutamiento
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

// ruta raiz de la aplicacion
app.get('/', (req, res) => {
    res.send('Welcome to the subscription tracker API!')
})

app.listen(PORT, async () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`)

    await connectDatabase() // realizar conexion con la base de datos al lanzar la aplicacion
})