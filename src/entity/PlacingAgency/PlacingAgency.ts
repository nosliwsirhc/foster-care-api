import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class PlacingAgency extends BasicEntity {

    @Column({ unique: true, nullable: false })
    name: string

}