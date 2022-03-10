import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Suffix extends BasicEntity {

    @Column()
    suffix: string

}