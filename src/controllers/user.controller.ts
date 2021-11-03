import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import pool from '../lib/db'

const changePassword = async (req: Request, res: Response) => {
    try {
        const { id, password, newPassword } = req.body
        const user = (await pool.query("SELECT password FROM app_user WHERE id = $1", [id])).rows[0]
        const pwdMatch = await bcrypt.compare(password, user.password)
        if(!pwdMatch) return res.sendStatus(403)
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newPassword, salt)
        await pool.query("UPDATE app_user SET password = $1 WHERE id = $2", [hash, id])
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

export default {
    changePassword
}