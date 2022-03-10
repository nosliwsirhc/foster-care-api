import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Profession extends BasicEntity {

    @Column()
    profession: string

}