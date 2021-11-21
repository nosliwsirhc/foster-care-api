import { Request, Response } from "express";
import { User } from "../entity/User";
import { createQueryBuilder,  } from "typeorm";

const userProfile = async (req: Request, res: Response) => {
    try {
        const id = req.query["id"] as string
        const user = await User.findOneOrFail(id) as Partial<User>
        delete user.password
        res.status(200).json(user)   
    } catch (error) {
        res.status(500)
    }
}

const users = async (req: Request, res: Response) => {
    try {
        const query = createQueryBuilder(User)
            .orderBy("username")
        let limit = 10
        if(req.query["limit"]) {
            limit = parseInt(req.query["limit"] as string)
        }
        query.limit(limit)
        const users = await query.execute()
        res.status(200).json(users)   
    } catch (error) {
        res.status(500)
    }
}

export default {
    userProfile,
    users
}