import { Column, Entity, JoinTable, ManyToOne, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Contact } from "../Contact";
import { ContactType } from "../ContactType";
import { HealthFacility } from "./HealthFacility";

@Entity()
export class HealthFacilityContact extends BasicEntity {

    @ManyToOne(type => HealthFacility)
    healthFacility: HealthFacility

    @ManyToOne(type => ContactType)
    contactType: ContactType

    @Column()
    label: string

    @OneToOne(type => Contact)
    @JoinTable()
    contact: Contact

}