import { Column, Entity, ManyToOne } from "typeorm";
import { Agency } from "../Agency";
import { BasicEntity } from "../BasicEntity";
import { FosterChild } from "./FosterChild";
import { PerDiemRateType } from "./PerDiemRateType";

@Entity()
export class PerDiemRate extends BasicEntity {

    @ManyToOne(() => Agency)
    agency: Agency

    @ManyToOne(type => FosterChild)
    fosterChild: FosterChild

    @ManyToOne(type => PerDiemRateType)
    perDiemRateType: PerDiemRateType

    @Column()
    rate: number

    @Column()
    startDate: Date

    @Column()
    endDate: Date

}