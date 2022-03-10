import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Race extends BasicEntity {

    @Column({ unique: true, nullable: false })
    race: string
    
}