import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { HealthFacility } from "./HealthFacility";
import { MedicalProfessional } from "./MedicalProfessional";
import { MedicalIssue } from "./MedicalIssue";

@Entity()
export class MedicalIssueHealthFacility {

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