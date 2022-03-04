import { BaseEntity, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Email } from "./Email";
import { EmailType } from "./EmailType";
import { Person } from "./Person";

@Entity()
export class PersonEmail extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(type => Person)
    person: Person

    @OneToOne(type => Email)
    email: Email

    @ManyToOne(type => EmailType)
    emailType: EmailType

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}