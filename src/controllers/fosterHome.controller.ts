import { Request, Response } from "express";
import { FosterHome } from "../entity/FosterHome/FosterHome";
import { IFosterParent, FosterParent } from "../entity/FosterHome/FosterParent";
import { Person } from "../entity/Person/Person";

interface IFosterParentRequest {
    firstName: string,
    middleName: string,
    lastName: string,
    fosterParent: IFosterParent
}

interface IFosterHomeRequest {
    name: string,
    applicationDate: Date
    openedDate: Date,
    closedDate: Date,
    homeStudy: any,
    fosterParents: any[],
    fosterHomeResidents: any[]
}

const createFosterHome = async (req: Request, res: Response) => {
    const { name, applicationDate, openedDate, closedDate, homeStudy, fosterParents, fosterHomeResidents } = req.body as IFosterHomeRequest
    const dbRequests: Promise<any>[] = []
    const fosterHome = new FosterHome()
    fosterHome.name = name
    fosterHome.applicationDate = applicationDate
    fosterHome.openedDate = openedDate
    fosterHome.closedDate = closedDate
    fosterHome.homeStudy = homeStudy
    dbRequests.push(fosterHome.save())
    fosterParents.forEach(parent => {
        const person = new Person()
        person.firstName = parent.firstName
        person.middleName = parent.middleName
        person.lastName = parent.lastName
        dbRequests.push(person.save())
        const fosterParent = new FosterParent()
        fosterParent.fosterHome = fosterHome
        fosterParent.person = person
        dbRequests.push(fosterParent.save())
    })
    try {
        await Promise.all(dbRequests)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
}

export default {
    createFosterHome
}