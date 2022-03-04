import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Gender } from "./Gender";
import { Person } from "./Person";

@Entity()
export class PersonGender extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(type => Gender)
    gender: Gender

    @ManyToOne(type => Person)
    person: Person

    @Column()
    dateIdentified: Date

    @Column({ default: false })
    isSelfIdentified: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}