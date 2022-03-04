import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Person } from "../Person/Person";
import { PlacingAgency } from "./PlacingAgency";
import { PlacingAgencyEmployeeJobTitle } from "./PlacingAgencyEmployeeJobTitle";

@Entity()
export class PlacingAgencyEmployee extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @OneToOne(type => Person)
    person: Person

    @ManyToOne(type => PlacingAgency)
    placingAgency: PlacingAgency

    @OneToMany(type => PlacingAgencyEmployeeJobTitle, jobTitle => jobTitle.employee)
    jobTitle: PlacingAgencyEmployeeJobTitle

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}