import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { PerDiemRateCriteria } from "./PerDiemRateCriteria";

@Entity()
export class PerDiemRateType extends BasicEntity {

    @Column()
    label: string

    @Column()
    description: string

    @Column({ default: true })
    isActive: boolean

    @ManyToMany(type => PerDiemRateCriteria)
    @JoinTable()
    criteria: PerDiemRateCriteria[]

}