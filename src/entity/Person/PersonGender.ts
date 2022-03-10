import { Column, Entity, ManyToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Gender } from "./Gender";
import { Person } from "./Person";

@Entity()
export class PersonGender extends BasicEntity {

    @ManyToOne(type => Gender)
    gender: Gender

    @ManyToOne(type => Person)
    person: Person

    @Column()
    dateIdentified: Date

    @Column({ default: false })
    isSelfIdentified: boolean

}