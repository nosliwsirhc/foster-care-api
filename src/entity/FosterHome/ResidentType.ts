import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class ResidentType extends BasicEntity {

    @Column()
    description: string

}