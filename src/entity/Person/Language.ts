import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Language extends BasicEntity {

    @Column({ unique: true, nullable: false })
    language: string
    
}