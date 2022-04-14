import cryptoRandomString from 'crypto-random-string'
import { Request, Response } from 'express'
// import bcrypt from 'bcrypt'
// import pool from '../lib/db'
import { User, IUSerRoles } from '../entity/User'
import { revokeRefreshTokenByUserId } from '../lib/auth.helper'

const seed = async (req: Request, res: Response) => {
    try {
        const { agencyName } = req.body
        
    } catch (error) {
        
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const { username, password, roles } = req.body
        const userExists = !!await User.findOne({username})
        if(userExists) return res.json({message: 'User exists'})
        const user = new User()
        user.username = username
        user.roles = roles
        await user.hashAndSetPassword(password)
        await user.save()
        res.json({id: user.id, username: user.username, roles: user.roles})
    } catch (error) {
        res.sendStatus(500)
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        if(!id) return res.sendStatus(400)
        const user = await User.findOneOrFail(id)
        await user.remove()
        res.sendStatus(200)
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
        user.hashAndSetPassword(tempPassword)
        await user.save()
        // In production the password should be emailed to the user instead of the password
        // being sent to the admin client
        res.json({password: tempPassword})
    } catch (error) {
        res.sendStatus(500)
    }
}

export default {
    seed,
    register,
    deleteUser,
    revokeToken,
    resetPassword
}