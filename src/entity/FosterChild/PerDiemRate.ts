import { Column, Entity, ManyToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { FosterChild } from "./FosterChild";
import { PerDiemRateType } from "./PerDiemRateType";

@Entity()
export class PerDiemRate extends BasicEntity {

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