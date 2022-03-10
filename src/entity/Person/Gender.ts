import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Gender extends BasicEntity {

    @Column({ unique: true, nullable: false })
    gender: string
    
}