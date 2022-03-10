import { Column, Entity } from "typeorm";
import { BasicEntity } from "./BasicEntity";

@Entity()
export class EmailType extends BasicEntity {

    @Column({ unique: true, nullable: false })
    description: string

}