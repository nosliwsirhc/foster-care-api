import { Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Person } from "../Person/Person";
import { FosterHome } from "./FosterHome";

@Entity()
export class FosterParent extends BasicEntity {

    @OneToOne(type => Person)
    @JoinColumn()
    person: Person

    @ManyToOne(type => FosterHome)
    fosterHome: FosterHome

}