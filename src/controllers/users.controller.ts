import { Request, Response } from "express";
import pool from '../lib/db'

const userProfile = async (req: Request, res: Response) => {
    try {
        const id = req.query["id"] as string
        const user = await pool.query("SELECT id, email FROM app_user WHERE id = $1", [id])
        res.status(200).json(user.rows[0])   
    } catch (error) {
        res.status(500)
    }
}

const users = async (req: Request, res: Response) => {
    try {
        let limit = 10
        if(req.query["limit"]) {
            limit = parseInt(req.query["limit"] as string)
        }
        let orderBy = "first_name"
        if(req.query["order-by"]) {
            orderBy = req.query["order-by"] as string
        }
        let order = "ASC"
        if(req.query["order"]) {
            order = req.query["order"] as string
        }
        const users = await pool.query("SELECT id, email FROM app_user ORDER BY $1 $2 LIMIT $3", [orderBy, order, limit])
        res.status(200).json(users.rows[0])   
    } catch (error) {
        res.status(500)
    }
}

export default {
    userProfile,
    users
}