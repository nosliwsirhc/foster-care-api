import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Religion extends BasicEntity {

    @Column({ unique: true, nullable: false })
    religion: string
    
}