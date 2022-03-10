import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Person } from "../Person/Person";
import { FosterHome } from "./FosterHome";
import { ResidentType } from "./ResidentType";

@Entity()
export class FosterHomeResident extends BasicEntity {

    @OneToOne(type => Person)
    @JoinColumn()
    person: Person

    @ManyToOne(type => FosterHome)
    fosterHome: FosterHome

    @ManyToOne(type => ResidentType)
    residentType: ResidentType

    // May need a better way of tracking if the resident is still living in the home
    // because sometimes people move out and back in
    @Column()
    isActive: boolean

}