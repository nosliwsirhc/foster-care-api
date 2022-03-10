import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Prefix extends BasicEntity {

    @Column()
    prefix: string

}