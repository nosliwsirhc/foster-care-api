import { Column, Entity } from "typeorm";
import { BasicEntity } from "./BasicEntity";

@Entity()
export class Address extends BasicEntity {

    @Column()
    address1: string

    @Column()
    address2: string

    @Column()
    city: string

    @Column()
    province: string

    @Column()
    postalCode: string

}