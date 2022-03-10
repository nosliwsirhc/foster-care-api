import { Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Email } from "../Email";
import { EmailType } from "../EmailType";
import { Person } from "./Person";

@Entity()
export class PersonEmail extends BasicEntity {

    @ManyToOne(type => Person)
    person: Person

    @OneToOne(type => Email)
    @JoinColumn()
    email: Email

    @ManyToOne(type => EmailType)
    emailType: EmailType

}