import { Entity, ManyToOne, OneToOne, JoinColumn, Column, JoinTable } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { FosterPlacement } from "./FosterPlacement";
import { FosterChild } from "./FosterChild";
import { Person } from "../Person/Person";
import { Attachment } from "../Attachment";

@Entity()
export class IntakeRightsReview extends BasicEntity {

    @ManyToOne(type => FosterChild)
    fosterChild: FosterChild

    @OneToOne(type => FosterPlacement)
    @JoinColumn()
    fosterPlacement: FosterPlacement

    @Column()
    dateOfReview: Date

    @ManyToOne(type => Person)
    reviewedBy: Person

    @OneToOne(type => Attachment)
    @JoinTable()
    attachment: Attachment

    @Column({ default: false })
    compliant: boolean

}