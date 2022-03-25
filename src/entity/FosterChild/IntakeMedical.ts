import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Attachment } from "../Attachment";
import { BasicEntity } from "../BasicEntity";
import { HealthFacility } from "../Medical/HealthFacility";
import { MedicalProfessional } from "../Medical/MedicalProfessional";
import { FosterChild } from "./FosterChild";
import { FosterPlacement } from "./FosterPlacement";

@Entity()
export class IntakeMedical extends BasicEntity {

    @ManyToOne(type => FosterChild)
    fosterChild: FosterChild

    @OneToOne(type => FosterPlacement)
    @JoinColumn()
    fosterPlacement: FosterPlacement

    @Column()
    dateTimeOfAppointment: Date

    @ManyToOne(type => MedicalProfessional)
    medicalProfessional: MedicalProfessional

    @ManyToOne(type => HealthFacility)
    healthFacility: HealthFacility

    @OneToOne(type => Attachment)
    @JoinColumn()
    attachment: Attachment

    @Column({ default: false })
    compliant: boolean

}