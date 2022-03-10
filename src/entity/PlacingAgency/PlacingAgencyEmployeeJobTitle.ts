import { Column, Entity, ManyToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { PlacingAgencyEmployee } from "./PlacingAgencyEmployee";

@Entity()
export class PlacingAgencyEmployeeJobTitle extends BasicEntity {

    @ManyToOne(type => PlacingAgencyEmployee)
    employee: PlacingAgencyEmployee

    @ManyToOne(type => PlacingAgencyEmployeeJobTitle)
    jobTitle: PlacingAgencyEmployeeJobTitle

    // THIS is the reason for the join table as employees can change job titles
    @Column()
    dateActive: Date
    
}