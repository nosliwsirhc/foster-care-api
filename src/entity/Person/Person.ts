import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm'
import { Ethnicity } from './Ethnicity'
import { Language } from './Language'
import { PersonAddress } from './PersonAddress'
import { PersonContact } from './PersonContact'
import { PersonEmail } from './PersonEmail'
import { PersonGender } from './PersonGender'
import { PersonReligion } from './PersonReligion'
import { PersonSexuality } from './PersonSexuality'
import { Race } from './Race'
import { Religion } from './Religion'

export enum Sex {
    FEMALE = 'female',
    MALE = 'male',
    INTERSEX = 'intersex'
}

@Entity()
export class Person extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ nullable: false })
    firstName: string

    @Column()
    middleName: string

    @Column({ nullable: false })
    lastName: string

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

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}