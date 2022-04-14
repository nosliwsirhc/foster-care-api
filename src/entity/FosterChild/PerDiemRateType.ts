import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { Agency } from "../Agency";
import { BasicEntity } from "../BasicEntity";
import { PerDiemRateCriteria } from "./PerDiemRateCriteria";

@Entity()
export class PerDiemRateType extends BasicEntity {

    @ManyToOne(() => Agency)
    agency: Agency

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