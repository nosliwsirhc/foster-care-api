import { Entity, Column, ManyToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Person } from "./Person";
import { Sexuality } from "./Sexuality";

@Entity()
export class PersonSexuality extends BasicEntity {

    @ManyToOne(type => Person)
    person: Person

    @ManyToOne(type => Sexuality)
    sexuality: Sexuality

    @Column()
    dateIdentified: Date

}