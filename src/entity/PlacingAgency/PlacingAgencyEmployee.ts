import { Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Person } from "../Person/Person";
import { PlacingAgency } from "./PlacingAgency";
import { PlacingAgencyEmployeeJobTitle } from "./PlacingAgencyEmployeeJobTitle";

@Entity()
export class PlacingAgencyEmployee extends BasicEntity {

    @OneToOne(type => Person)
    person: Person

    @ManyToOne(type => PlacingAgency)
    placingAgency: PlacingAgency

    @OneToMany(type => PlacingAgencyEmployeeJobTitle, jobTitle => jobTitle.employee)
    jobTitle: PlacingAgencyEmployeeJobTitle

}