import { BaseEntity, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./Address";
import { AddressType } from "./AddressType";
import { Person } from "./Person";

@Entity()
export class PersonAddress extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(type => Person)
    person: Person

    @OneToOne(type => Address)
    address: Address

    @ManyToOne(type => AddressType)
    addressType: AddressType

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
    
}