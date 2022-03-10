import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { FosterHome } from "../FosterHome/FosterHome";
import { PlacingAgency } from "../PlacingAgency/PlacingAgency";
import { FosterChild } from "./FosterChild";

@Entity()
export class FosterPlacement extends BasicEntity {

    @ManyToOne(type => FosterChild)
    fosterChild: FosterChild

    @ManyToOne(type => PlacingAgency)
    placingAgency: PlacingAgency

    @ManyToOne(type => FosterHome)
    fosterHome: FosterHome

    @Column()
    placementDate: Date

    @Column()
    dischargeDate: Date
    
    intakeMedical: IntakeMedical

    intakeRightsReview: IntakeRightsReview

    intakeHomeRulesReview: IntakeHomeRulesReview

    intakeDiscussAdvocacy: IntakeDiscussAdvocacy

    intakeConsentToService: IntakeConsentToService

    annualMedical: AnnualMedical[]
    
    dischargeMedical: DischargeMedical

    planOfCare: PlanOfCare[]

    dischargePlan: DischargePlan



}