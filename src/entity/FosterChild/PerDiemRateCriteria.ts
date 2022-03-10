import { Column, Entity } from "typeorm";
import { BasicEntity } from "../BasicEntity";

@Entity()
export class PerDiemRateCriteria extends BasicEntity {

    @Column()
    label: string

    @Column()
    description: string

    @Column({ default: true })
    isActive: boolean

}