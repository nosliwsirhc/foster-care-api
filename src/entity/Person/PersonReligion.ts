import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./Person";
import { Religion } from "./Religion";

@Entity()
export class PersonReligion extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    conversionDate: Date

    @ManyToOne(type => Person)
    person: Person

    @ManyToOne(type => Religion)
    religion: Religion

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}