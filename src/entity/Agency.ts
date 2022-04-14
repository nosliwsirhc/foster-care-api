import { Column, Entity, OneToMany } from "typeorm";
import { AgencyAddress } from "./AgencyAddress";
import { BasicEntity } from "./BasicEntity";

@Entity()
export class Agency extends BasicEntity {

    @Column()
    name: string

    @OneToMany(() => AgencyAddress, address => address.agency)
    branches: AgencyAddress[]

}