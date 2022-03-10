import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Diagnosis extends BasicEntity {

    @Column()
    diagnosis: string

}