import { config } from 'dotenv'

// definir la ruta de acceso al archivo que contiene las variables de entorno dependiendo del entorno de ejecucion de la aplicacion
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` })

// extraer mediante desestructuracion las variables de entorno
export const { PORT, NODE_ENV, DB_URI } = process.env