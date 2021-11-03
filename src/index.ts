import express from 'express'
import pool from './lib/db'
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

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(passport.initialize())

app.use(`${API_URI}/admin`, routes.admin)
app.use(`${API_URI}/authenticate`, routes.authenticate)
app.use(`${API_URI}/users`, routes.users)
app.use(`${API_URI}/user`, routes.user)

app.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await pool.query("SELECT id, email FROM app_user WHERE id = $1", [id])
        res.json(user.rows[0])
    } catch (error) {
        console.error(error)
        res.json({message: "Error"})
    }
})

app.listen(PORT, () => {
    console.info(`Server started on Port ${PORT}`)
})