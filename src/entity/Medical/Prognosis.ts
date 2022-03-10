import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Diagnosis } from "./Diagnosis";
import { HealthFacility } from "./HealthFacility";
import { MedicalIssue } from "./MedicalIssue";
import { MedicalProfessional } from "./MedicalProfessional";

@Entity()
export class Prognosis extends BasicEntity {

    @ManyToOne(type => Diagnosis)
    diagnosis: Diagnosis

    @ManyToOne(type => MedicalIssue)
    medicalIssue: MedicalIssue

    @ManyToOne(type => HealthFacility)
    healthFacility: HealthFacility

    @ManyToMany(type => MedicalProfessional)
    @JoinTable()
    medicalProfessional: MedicalProfessional[]

    @Column()
    date: Date

    @Column()
    prognosis: string

}