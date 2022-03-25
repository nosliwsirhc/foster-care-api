import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BasicEntity } from "../BasicEntity";
import { Person } from "../Person/Person";
import { FosterPlacement } from "./FosterPlacement";
import { PerDiemRate } from "./PerDiemRate";
import { SocialHistory } from "./SocialHistory";

@Entity()
export class FosterChild extends BasicEntity {

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