import crypto from 'crypto'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import pool from '../lib/db'
import { revokeRefreshTokenByUserId } from '../lib/auth.helper'

const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await pool.query("INSERT INTO app_user (email, password) VALUES ($1,$2) RETURNING id, email", [email,hash])
        res.status(201).json(user.rows[0])   
    } catch (error) {
        res.sendStatus(500)
    }
}

const revokeToken = (req: Request, res: Response) => {
    try {
        const userId = req.params['user-id']
        if(!userId) return res.sendStatus(400)
        revokeRefreshTokenByUserId(userId)
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

const resetPassword = async (req: Request, res: Response) => {
    try {
        const userId = req.query["user-id"] as string
        if(!userId) return res.sendStatus(401)
        const salt = await bcrypt.genSalt(10)
        const password = crypto.randomBytes(1).toString('utf-8')
        const hash = await bcrypt.hash(password, salt)
        // NEED TO SEND THE PASSWORD TO USER USING AN EMAIL SERVICE
        await pool.query("UPDATE app_user SET password = $1 WHERE id = $2", [hash, userId])
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}

export default {
    register,
    revokeToken,
    resetPassword
}