import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class Sexuality extends BasicEntity {

    @Column({ unique: true, nullable: false })
    sexuality: string
    
}