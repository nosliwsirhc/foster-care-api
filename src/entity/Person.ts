import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm'

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

}