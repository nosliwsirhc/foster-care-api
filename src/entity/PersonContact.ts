import { BaseEntity, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Contact } from "./Contact";
import { ContactType } from "./ContactType";
import { Person } from "./Person";

@Entity()
export class PersonContact extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToOne(type => Person)
    person: Person

    @OneToOne(type => Contact)
    address: Contact

    @ManyToOne(type => ContactType)
    addressType: ContactType

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}