import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { HealthFacility } from "./HealthFacility";
import { MedicalProfessional } from "./MedicalProfessional";
import { MedicalIssue } from "./MedicalIssue";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class MedicalIssueHealthFacility extends BasicEntity {

    @ManyToOne(type => MedicalIssue)
    medicalIssue: MedicalIssue

    @ManyToOne(type => HealthFacility)
    healthFacility: HealthFacility

    @OneToMany(type => MedicalProfessional, professional => professional.healthFacility)
    healthProfessional: MedicalProfessional[]

    @Column()
    startDate: Date

    @Column()
    endDate: Date

}