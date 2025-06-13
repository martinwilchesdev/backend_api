import mongoose from 'mongoose'
import { DB_URI, NODE_ENV } from '../config/env.js'

if (!DB_URI) {
    throw new Error('Please define the MongoDB URI environment variable inside .env.<development/production>.local')
}

const connectDatabase = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log(`Connected to database in ${NODE_ENV} mode`)
    } catch (error) {
        console.error('Error connecting database: ', error)
        process.exit(1)
    }
}

export default connectDatabase
