import { Request, Response } from "express";
import { FosterPlacement } from "../entity/FosterChild/FosterPlacement";

const createFosterPlacement = async (req: Request, res: Response) => {
    const placement = new FosterPlacement()
}

export default {
    createFosterPlacement
}