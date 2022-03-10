import { Column, Entity, ManyToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Person } from "./Person";
import { Religion } from "./Religion";

@Entity()
export class PersonReligion extends BasicEntity {

    @Column()
    conversionDate: Date

    @ManyToOne(type => Person)
    person: Person

    @ManyToOne(type => Religion)
    religion: Religion

}