import { Request, Response } from "express";
import { User } from "../entity/User";

const changePassword = async (req: Request, res: Response) => {
    try {
        const { id, password, newPassword } = req.body
        const user = await User.findOne(id) as User
        if(!user) return res.sendStatus(401)
        if(!user.checkPassword(password)) return res.sendStatus(403)
        user.updatePassword(password, newPassword)
        await user.save()
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
}

export default {
    changePassword
}