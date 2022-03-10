import { Column, Entity } from "typeorm";
import { BasicEntity } from "./BasicEntity";

@Entity()
export class ContactType extends BasicEntity {

    @Column({ unique: true, nullable: false })
    description: string

}