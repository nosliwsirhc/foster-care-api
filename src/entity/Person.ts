import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm'
import { Address } from './Address'
import { PersonAddress } from './PersonAddress'
import { PersonContact } from './PersonContact'

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

    @Column()
    gender: string

    @Column()
    dateOfBirth: Date

    @Column()
    religion: string

    @Column()
    ethnicity: string

    @Column()
    race: string

    @Column()
    sexuality: string

    @OneToMany(type => PersonAddress, address => address.person)
    address: PersonAddress

    @OneToMany(type => PersonContact, contact => contact.person)
    contact: PersonContact

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}