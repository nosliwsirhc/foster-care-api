import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Agency } from "../Agency";
import { BasicEntity } from "../BasicEntity";
import { Person } from "../Person/Person";
import { FosterPlacement } from "./FosterPlacement";
import { PerDiemRate } from "./PerDiemRate";
import { SocialHistory } from "./SocialHistory";

@Entity()
export class FosterChild extends BasicEntity {

    @ManyToOne(() => Agency)
    agency: Agency

    @OneToOne(type => Person)
    @JoinColumn()
    person: Person

    @OneToMany(type => PerDiemRate, rate => rate.fosterChild)
    perDiem: PerDiemRate[]

    @OneToMany(type => FosterPlacement, placement => placement.fosterChild)
    placement: FosterPlacement[]

    @OneToMany(type => SocialHistory, socialHistory => socialHistory.fosterChild)
    socialHistory: SocialHistory[]

}