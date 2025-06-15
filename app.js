import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())

// puerto utilizado por el servidor para inicializar la aplicacion
import { PORT } from './config/env.js'

// rutas
import authRouter from './routes/auth.routes.js'
import usersRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'

// mongodb
import connectDatabase from './database/mongodb.js'
import errorMiddleware from './middlewares/error.middleware.js'

// middleware para menejar los datos JSON enviados en las peticiones
app.use(express.json())

// middleware para procesar los datos enviados desde formularios HTML
app.use(express.urlencoded({ extended: false }))

// middleware que permite leer y escribir cookies en los controladores de ruta
app.use(cookieParser())

// middlewares de enrutamiento
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/subscriptions', subscriptionRouter)

// middleware para el manejo de errores
app.use(errorMiddleware)

// ruta raiz de la aplicacion
app.get('/', (req, res) => {
    res.send('Welcome to the subscription tracker API!')
})

app.listen(PORT, async () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`)

    await connectDatabase() // realizar conexion con la base de datos al lanzar la aplicacion
})