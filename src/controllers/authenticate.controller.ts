import { Request, Response } from 'express'
import { User } from '../entity/User'
import { issueAccessJwt, issueRefreshJwt, refreshAuthJwts, revokeRefreshTokenByToken, revokeRefreshTokenByUserId } from '../lib/auth.helper'

const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({username})
        if(!user) return res.sendStatus(401)
        if(!await user.checkPassword(password)) return res.status(401).json({message: "Password is incorrect"})
        const token = issueAccessJwt(user.id)
        const refreshToken = issueRefreshJwt(user.id)
        res.status(200).json({token, refreshToken})
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

const refresh = (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body
        const jwts = refreshAuthJwts(refreshToken)
        if(jwts === false) {
            res.sendStatus(401)
        } else {
            res.json(jwts)
        }
    } catch (error) {
        res.sendStatus(500)
    }
}

const logout = (req: Request, res: Response) => {
    try {
        const refreshToken = req.header('Refresh-Token')
        if(!refreshToken) return res.sendStatus(400)
        revokeRefreshTokenByToken(refreshToken)
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

export default {
    login,
    refresh,
    logout
}