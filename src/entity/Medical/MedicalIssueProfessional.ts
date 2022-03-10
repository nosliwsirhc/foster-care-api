import { Entity, ManyToOne, Column } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { HealthFacility } from "./HealthFacility";
import { MedicalProfessional } from "./MedicalProfessional";
import { MedicalIssue } from "./MedicalIssue";

@Entity()
export class MedicalIssueProfessional extends BasicEntity {

    @ManyToOne(type => MedicalIssue)
    medicalIssue: MedicalIssue

    @ManyToOne(type => MedicalProfessional)
    medicalProfessional: MedicalProfessional

    @ManyToOne(type => HealthFacility)
    healthFacility: HealthFacility

    @Column()
    startDate: Date

    @Column()
    endDate: Date

}