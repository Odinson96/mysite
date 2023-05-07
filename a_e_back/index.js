import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import ExpRouter from './Endpoints/Experience/ExpRouter.js'
import StackRouter from './Endpoints/Experience/Stack/StackRouter.js'

dotenv.config()

const { PASSWORD, LOGIN, PORT } = process.env

const app = express()
const DB_URL = `mongodb+srv://${LOGIN}:${PASSWORD}@aesite.4ximve1.mongodb.net/?retryWrites=true&w=majority`

const allowedOrigins = ['http://localhost:3000'];

const option = {
    origin: allowedOrigins
}

app.use(cors(option))
app.use(express.json())
app.use('/api', ExpRouter)
app.use('/api', StackRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => console.log(`Server was started on PORT=${PORT}`))
    } catch (error) {
        console.log(error.message);
    }

}

startApp()