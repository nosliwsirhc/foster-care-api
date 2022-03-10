import { Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Address } from "../Address";
import { AddressType } from "../AddressType";
import { BasicEntity } from "../BasicEntity";
import { Person } from "./Person";

@Entity()
export class PersonAddress extends BasicEntity {

    @ManyToOne(type => Person)
    person: Person

    @OneToOne(type => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(type => AddressType)
    addressType: AddressType
    
}