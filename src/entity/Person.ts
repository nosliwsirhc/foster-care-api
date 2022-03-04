import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm'
import { Ethnicity } from './Ethnicity'
import { PersonAddress } from './PersonAddress'
import { PersonContact } from './PersonContact'
import { PersonEmail } from './PersonEmail'
import { PersonGender } from './PersonGender'

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

    @Column()
    sex: string

    @OneToMany(type => PersonGender, gender => gender.person)
    gender: PersonGender[]

    @Column()
    dateOfBirth: Date

    @Column()
    religion: string

    @ManyToMany(type => Ethnicity)
    @JoinTable()
    ethnicity: Ethnicity[]

    @Column()
    race: string

    @Column()
    sexuality: string

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