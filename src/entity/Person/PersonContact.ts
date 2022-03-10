import { Entity, ManyToOne, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Contact } from "../Contact";
import { ContactType } from "../ContactType";
import { Person } from "./Person";

@Entity()
export class PersonContact extends BasicEntity {

    @ManyToOne(type => Person)
    person: Person

    @OneToOne(type => Contact)
    address: Contact

    @ManyToOne(type => ContactType)
    addressType: ContactType

}