import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Ethnicity extends BasicEntity {

    @Column({ unique: true, nullable: false })
    ethnicity: string

    @Column({ default: false })
    isIndigenous: boolean

}