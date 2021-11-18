import cryptoRandomString from 'crypto-random-string'
import { Request, Response } from 'express'
// import bcrypt from 'bcrypt'
// import pool from '../lib/db'
import { User, IUSerRoles } from '../entity/User'
import { revokeRefreshTokenByUserId } from '../lib/auth.helper'

const register = async (req: Request, res: Response) => {
    try {
        const { username, password, roles } = req.body
        const user = new User()
        user.username = username
        await user.createPassword(password)
        await user.save()
        res.json({id: user.id, username: user.username, roles: user.roles})
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
        const user = await User.findOne(userId)
        if(!user) return res.sendStatus(401)
        const tempPassword = cryptoRandomString({length: 12, type: 'alphanumeric'})
        user.createPassword(tempPassword)
        await user.save()
        // In production the password should be emailed to the user instead of the password
        // being sent to the admin client
        res.json({password: tempPassword})
    } catch (error) {
        res.sendStatus(500)
    }
}

export default {
    register,
    revokeToken,
    resetPassword
}