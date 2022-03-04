import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne } from "typeorm";
import { Person } from "./Person";
import { Sexuality } from "./Sexuality";

@Entity()
export class PersonSexuality extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(type => Person)
    person: Person

    @ManyToOne(type => Sexuality)
    sexuality: Sexuality

    @Column()
    dateIdentified: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}