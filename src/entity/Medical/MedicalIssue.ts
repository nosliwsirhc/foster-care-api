import { Entity, ManyToOne, OneToMany } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Person } from "../Person/Person";
import { Diagnosis } from "./Diagnosis";
import { Prognosis } from "./Prognosis";

@Entity()
export class MedicalIssue extends BasicEntity {

    @ManyToOne(type => MedicalIssue)
    parentIssue: MedicalIssue

    @ManyToOne(type => Person)
    person: Person

    @ManyToOne(type => Diagnosis)
    diagnosis: Diagnosis

    @OneToMany(type => Prognosis, prognosis => prognosis.medicalIssue)
    prognosis: Prognosis[]

}