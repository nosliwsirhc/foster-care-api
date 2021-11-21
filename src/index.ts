import 'reflect-metadata'
import express from 'express'
import dbConection from './lib/dbConnection'
import routes from './routes'
import morgan from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'
import passport from './lib/passport'

const app = express()
const API_URI = '/api/v1'

if(process.env.NODE_ENV === "production") {
    app.use(helmet())
} else {
    dotenv.config()
    app.use(morgan('combined'))
}

dbConection()
    .then(() => console.info('Database Connected'))

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(passport.initialize())

app.use(`${API_URI}/admin`, routes.admin)
app.use(`${API_URI}/authenticate`, routes.authenticate)
app.use(`${API_URI}/users`, routes.users)
app.use(`${API_URI}/user`, routes.user)

app.listen(PORT, () => {
    console.info(`Server started on Port ${PORT}`)
})