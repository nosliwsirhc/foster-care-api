import { Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Person } from "../Person/Person";
import { HealthFacility } from "./HealthFacility";

@Entity()
export class MedicalProfessional extends BasicEntity {

    @OneToOne(type => Person)
    @JoinColumn()
    person: Person

    @ManyToMany(type => HealthFacility)
    @JoinTable()
    healthFacility: HealthFacility[]

}