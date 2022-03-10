import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { Address } from "../Address";
import { BasicEntity } from "../BasicEntity";
import { HealthFacilityContact } from "./HealthFacilityContact";

@Entity()
export class HealthFacility extends BasicEntity {

    @Column()
    name: string

    @OneToOne(type => Address)
    @JoinColumn()
    address: Address

    @OneToMany(type => HealthFacilityContact, contact => contact.healthFacility)
    contact: HealthFacilityContact[]

}