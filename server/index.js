import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import { UserRouter } from './routes/user.js'
import { configDotenv } from 'dotenv'


const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', UserRouter)

const mongoURL = process.env.MONGODB_URL;


mongoose.connect(mongoURL)

app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})