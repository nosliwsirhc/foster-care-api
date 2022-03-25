import { Column, Entity, ManyToOne } from "typeorm";
import { BasicEntity } from "./BasicEntity";
import { User } from "./User";

export interface AccessGroups {
    none: boolean,
    all: boolean,
    directors: boolean,
    administration: boolean,
    accounting: boolean,
    legal: boolean,
    resourceWorkers: boolean,
    fosterParents: boolean,
    supportStaff: boolean,
    externalCSW: boolean,
    externalFSW: boolean,
    externalPlacement: boolean,
    externalMedicalProfessional: boolean
}

@Entity()
export class Attachment extends BasicEntity {

    @Column()
    url: string

    @Column()
    bucket: string

    @ManyToOne(type => User)
    owner: string

    @Column({ type: "jsonb", default: {
        none: true,
        all: false,
        directors: false,
        administration: false,
        accounting: false,
        legal: false,
        resourceWorkers: false,
        fosterParents: false,
        supportStaff: false,
        externalCSW: false,
        externalFSW: false,
        externalPlacement: false,
        externalMedicalProfessional: false
    }} )
    accessGroup: AccessGroups

    @Column({ type: "jsonb" })
    accessUsers: object

}