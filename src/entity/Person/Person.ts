import { Entity, Column, OneToMany, ManyToMany, JoinColumn, JoinTable, OneToOne, ManyToOne } from 'typeorm'
import { Agency } from '../Agency'
import { BasicEntity } from '../BasicEntity'
import { MedicalIssue } from '../Medical/MedicalIssue'
import { User } from '../User'
import { Ethnicity } from './Ethnicity'
import { Language } from './Language'
import { PersonAddress } from './PersonAddress'
import { PersonContact } from './PersonContact'
import { PersonEmail } from './PersonEmail'
import { PersonGender } from './PersonGender'
import { PersonReligion } from './PersonReligion'
import { PersonSexuality } from './PersonSexuality'
import { Prefix } from './Prefix'
import { Profession } from './Profession'
import { Race } from './Race'
import { Religion } from './Religion'
import { Suffix } from './Suffix'

export enum Sex {
    FEMALE = 'female',
    MALE = 'male',
    INTERSEX = 'intersex'
}

export interface IPerson {
    prefix: string,
    firstName: string,
    middleName: string,
    lastName: string,
    suffix: string[],
    profession: string,
    sex: Sex,
    gender: string[],
    language: string[],
    
}

@Entity()
export class Person extends BasicEntity {

    @ManyToOne(() => Agency)
    agency: Agency

    @ManyToOne(type => Prefix)
    prefix: Prefix

    @Column({ nullable: false })
    firstName: string

    @Column()
    middleName: string

    @Column({ nullable: false })
    lastName: string

    @ManyToMany(type => Suffix)
    @JoinTable()
    suffix: Suffix[]

    @ManyToOne(type => Profession)
    profession: Profession

    @Column({
        type: 'enum',
        enum: Sex
    })
    sex: Sex

    @OneToMany(type => PersonGender, gender => gender.person)
    gender: PersonGender[]

    @ManyToMany(type => Language)
    @JoinTable()
    language: Language[]

    @Column()
    dateOfBirth: Date

    @OneToMany(type => PersonReligion, religion => religion.person)
    religion: Religion[]

    @ManyToMany(type => Ethnicity)
    @JoinTable()
    ethnicity: Ethnicity[]

    @ManyToMany(type => Race)
    @JoinTable()
    race: Race[]

    @OneToMany(type => PersonSexuality, sexuality => sexuality.person)
    sexuality: PersonSexuality[]

    @OneToMany(type => PersonAddress, address => address.person)
    address: PersonAddress[]

    @OneToMany(type => PersonContact, contact => contact.person)
    contact: PersonContact[]

    @OneToMany(type => PersonEmail, email => email.person)
    email: PersonEmail[]

    @OneToOne(type => User)
    @JoinColumn()
    user: User

    @OneToMany(type => MedicalIssue, medicalIssue => medicalIssue.person)
    medicalIssue: MedicalIssue[]

}