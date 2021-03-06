import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class PlacingAgencyJobTitle extends BasicEntity {

    @Column()
    jobTitle: string

    @Column()
    department: string

}