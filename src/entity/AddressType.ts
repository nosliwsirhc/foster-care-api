import { Column, Entity } from "typeorm";
import { BasicEntity } from "./BasicEntity";

@Entity()
export class AddressType extends BasicEntity {

    @Column({ unique: true, nullable: false })
    description: string

}