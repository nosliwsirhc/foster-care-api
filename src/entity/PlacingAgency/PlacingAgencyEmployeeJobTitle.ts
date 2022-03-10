import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PlacingAgencyEmployee } from "./PlacingAgencyEmployee";

@Entity()
export class PlacingAgencyEmployeeJobTitle extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(type => PlacingAgencyEmployee)
    employee: PlacingAgencyEmployee

    @ManyToOne(type => PlacingAgencyEmployeeJobTitle)
    jobTitle: PlacingAgencyEmployeeJobTitle

    // THIS is the reason for the join table as employees can change job titles
    @Column()
    dateActive: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
    
}